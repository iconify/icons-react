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
		"content": `<style>.lr5_jwnga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.54 4.54c.488-.35.995-.54 1.46-.54h2c.64 0 1.36.36 2 1l2 2a4 4 0 0 1 4 4v5m-2.354 3.646A4 4 0 0 1 17 20H7a4 4 0 0 1-4-4v-5c0-1.9 1.325-3.49 3.101-3.899M9.88 10.88a3 3 0 0 0 4.243 4.243M2 3l19 19");
}
</style><path class="lr5_jwnga"/>`,
		"fallback": "coolicons:camera-off-round",
	});
}

export default Component;
