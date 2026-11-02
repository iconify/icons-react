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
		"content": `<style>.dlskfcdxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3a9.49 9.49 0 0 0-6 6l8 4l2 1c.64.32 1.32-.36 1-1l-1-2ZM3 9v6a2 2 0 0 0 2 2h5m-5 0c0 2.21 1.343 4 3 4a2 2 0 0 0 2-2v-2c0-1.5.4-3 1-4M9 3h6a2 2 0 0 1 2 2v5m0-5c2.21 0 4 1.343 4 3a2 2 0 0 1-2 2h-2c-1.5 0-3 .4-4 1");
}
</style><path class="dlskfcdxq"/>`,
		"fallback": "coolicons:croissant-round",
	});
}

export default Component;
