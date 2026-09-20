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
		"content": `<style>.l691j31_y {
  fill: currentColor;
  d: path("M168 136a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8m64-56v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h27.72L87 39.12A16 16 0 0 1 100.28 32h55.44A16 16 0 0 1 169 39.12L180.28 56H208a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8h-32a8 8 0 0 1-6.66-3.56L155.72 48h-55.44L86.66 68.44A8 8 0 0 1 80 72H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8Z");
}
</style><path class="l691j31_y"/>`,
		"fallback": "ph:camera-plus",
	});
}

export default Component;
