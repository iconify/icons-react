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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qj5c40ohq {
  d: path("M7.25 11.1022L11.4143 20.9213L11.4144 20.9214C11.6904 21.5722 11.8285 21.8978 12 21.8978C12.1715 21.8978 12.3096 21.5722 12.5856 20.9214L12.5857 20.9213L16.75 11.1022");
}

.qmoejxlii {
  d: path("M9.20068 15.7022L15.7319 13.5023");
}

.wgt33soab {
  d: path("M5.25 8.85217C5.25 5.12427 8.2721 2.10217 12 2.10217C15.7279 2.10217 18.75 5.12427 18.75 8.85217C18.75 10.3022 18.1 11.1022 17 11.1022H7C5.9 11.1022 5.25 10.3022 5.25 8.85217Z");
}
</style><g class="hntgybcog"><path class="wgt33soab"/><path class="qj5c40ohq"/><path class="qmoejxlii"/></g>`,
		"fallback": "solar:ice-cream-cone-linear",
	});
}

export default Component;
