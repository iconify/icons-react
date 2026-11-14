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
		"content": `<style>.b8pcch1aa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5V12m3-7.5V12m3-7.5V12m3-7.5V12m3-7.5V12m3-7.5V12M6 17h.01M12 17h.01M18 17h.01");
}
</style><path class="b8pcch1aa"/>`,
		"fallback": "uix:barcode-keyed",
	});
}

export default Component;
