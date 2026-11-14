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
		"content": `<style>.pnfynkbnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5v3M6.5 7v10M10 4v16m3.5-12v8M17 5.5v13m3.5-8.5v4");
}
</style><path class="pnfynkbnr"/>`,
		"fallback": "uix-sharp:audio-waveform",
	});
}

export default Component;
