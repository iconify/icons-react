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
		"content": `<style>.x9iix2fft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5L5.5 19m7-14L11 19M3 9.5h11.5m-12 5H14m5.5-6za2.25 2.25 0 0 1 2.25 2.25v2.5a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25v-2.5A2.25 2.25 0 0 1 19.5 8.5");
}
</style><path class="x9iix2fft"/>`,
		"fallback": "uix:colour-hex-code",
	});
}

export default Component;
