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
		"content": `<style>.l7j0qjbzx {
  fill: currentColor;
  d: path("M5 16C5 9.925 9.925 5 16 5c2.923 0 5.58 1.14 7.55 3H21a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v2.62A12.96 12.96 0 0 0 16 3C8.82 3 3 8.82 3 16s5.82 13 13 13s13-5.82 13-13q0-.546-.044-1.082a1 1 0 0 0-1.994.164Q27 15.537 27 16c0 6.075-4.925 11-11 11S5 22.075 5 16");
}
</style><path class="l7j0qjbzx"/>`,
		"fallback": "fluent:arrow-clockwise-32-regular",
	});
}

export default Component;
