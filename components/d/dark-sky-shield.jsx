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
		"content": `<style>.g3y382w1l {
  d: path("M10.5 7c0-2.5 1.75-4 4-4s4 1.5 4 4ZM3 21.5h18M12.5 9.75L11 17.5m5.5-7.75L18 17.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.roqqafbak {
  d: path("M6 21.5V7a4 4 0 0 1 4-4h4.5");
}
</style><g class="hntgybcog"><path class="roqqafbak"/><path class="g3y382w1l"/></g>`,
		"fallback": "uix:dark-sky-shield",
	});
}

export default Component;
