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
		"content": `<style>.f4_jm3u5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h4L8 10.5L9.5 13h1L12 4l2 16l1.5-7H17l1.5-2.5L20 13h1.5");
}
</style><path class="f4_jm3u5u"/>`,
		"fallback": "uix-sharp:ecg-waveform",
	});
}

export default Component;
