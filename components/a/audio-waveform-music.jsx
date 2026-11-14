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
		"content": `<style>.n81ew4woc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5v5M6.5 5v14M10 3v18m3.5-15v10M17 8v3.5m2.25 8.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 1 1 3.5 0V14l2.5 1.25");
}
</style><path class="n81ew4woc"/>`,
		"fallback": "uix:audio-waveform-music",
	});
}

export default Component;
