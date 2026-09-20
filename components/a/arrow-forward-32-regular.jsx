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
		"content": `<style>.ybfop615b {
  fill: currentColor;
  d: path("M20.293 6.293a1 1 0 0 0 0 1.414L25.586 13H15C8.373 13 3 18.373 3 25a1 1 0 1 0 2 0c0-5.523 4.477-10 10-10h10.586l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0");
}
</style><path class="ybfop615b"/>`,
		"fallback": "fluent:arrow-forward-32-regular",
	});
}

export default Component;
