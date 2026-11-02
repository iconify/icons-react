import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t97dd4xnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 13zc0 1 1 1 1 2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2c0-1 1-1 1-2V9a6 6 0 0 1 6-6M9 17v1a3 3 0 0 0 6 0v-1m0-11a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="t97dd4xnr"/>`,
		"fallback": "coolicons:bell-dot-round",
	});
}

export default Component;
