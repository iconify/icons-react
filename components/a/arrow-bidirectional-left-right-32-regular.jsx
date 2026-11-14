import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mtimwbckx {
  fill: currentColor;
  d: path("M20.293 8.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L25.586 17H6.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 1 1 1.414 1.414L6.414 15h19.172l-5.293-5.293a1 1 0 0 1 0-1.414");
}
</style><path class="mtimwbckx"/>`,
		"fallback": "fluent:arrow-bidirectional-left-right-32-regular",
	});
}

export default Component;
