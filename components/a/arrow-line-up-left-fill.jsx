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
		"content": `<style>.sy-hmzb_w {
  fill: currentColor;
  d: path("M64 144V48a8 8 0 0 1 8-8h96a8 8 0 0 1 5.66 13.66L131.31 96l58.35 58.34a8 8 0 0 1-11.32 11.32L120 107.31l-42.34 42.35A8 8 0 0 1 64 144m160 56H48a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16");
}
</style><path class="sy-hmzb_w"/>`,
		"fallback": "ph:arrow-line-up-left-fill",
	});
}

export default Component;
