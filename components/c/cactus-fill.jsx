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
		"content": `<style>.cupa5ebub {
  fill: currentColor;
  d: path("M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h48v-72h-8a64.07 64.07 0 0 1-64-64a24.07 24.07 0 0 1 24.08-24h.4A23.55 23.55 0 0 1 64 71.52V72a16 16 0 0 0 16 16h8V56a40 40 0 0 1 80 0v72h8a16 16 0 0 0 16-16v-.48A23.55 23.55 0 0 1 215.52 88h.4A24.07 24.07 0 0 1 240 112a64.07 64.07 0 0 1-64 64h-8v32h48a8 8 0 0 1 8 8");
}
</style><path class="cupa5ebub"/>`,
		"fallback": "ph:cactus-fill",
	});
}

export default Component;
