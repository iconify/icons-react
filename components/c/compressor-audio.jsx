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
		"content": `<style>.aru36_bdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 8.5h1A3.5 3.5 0 0 1 16 12a3.5 3.5 0 0 1-3.5 3.5h-1A3.5 3.5 0 0 1 8 12a3.5 3.5 0 0 1 3.5-3.5m.5-6v3.25m-2.5-2.5l2.5 2.5l2.5-2.5M12 21.5v-3.25m-2.5 2.5l2.5-2.5l2.5 2.5");
}
</style><path class="aru36_bdu"/>`,
		"fallback": "uix:compressor-audio",
	});
}

export default Component;
