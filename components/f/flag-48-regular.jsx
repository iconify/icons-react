import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.agna75bvv {
  fill: currentColor;
  d: path("M7.5 7.25C7.5 6.56 8.06 6 8.75 6h32.5a1.25 1.25 0 0 1 1.007 1.99L33.801 19.5l8.456 11.51A1.25 1.25 0 0 1 41.25 33H10v9.75a1.25 1.25 0 1 1-2.5 0zM10 30.5h28.78l-7.537-10.26a1.25 1.25 0 0 1 0-1.48L38.78 8.5H10z");
}
</style><path class="agna75bvv"/>`,
		"fallback": "fluent:flag-48-regular",
	});
}

export default Component;
