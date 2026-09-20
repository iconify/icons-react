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
		"content": `<style>.tfo8_1slc {
  fill: currentColor;
  d: path("M184 96.8V88a32 32 0 0 0-32-32h-16V32h32a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-64a8 8 0 0 0 0 16h16v24h-16a32 32 0 0 0-32 32v8.8A40.07 40.07 0 0 0 40 136v80a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-80a40.07 40.07 0 0 0-32-39.2M104 72h48a16 16 0 0 1 16 16v8H88v-8a16 16 0 0 1 16-16");
}
</style><path class="tfo8_1slc"/>`,
		"fallback": "ph:hand-soap-fill",
	});
}

export default Component;
