import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ufl0x_b_g {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-108v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h38.34L93.17 98.83a4 4 0 0 1 5.66-5.66L156 150.34V112a4 4 0 0 1 8 0");
}
</style><path class="ufl0x_b_g"/>`,
		"fallback": "ph:arrow-circle-down-right-thin",
	});
}

export default Component;
