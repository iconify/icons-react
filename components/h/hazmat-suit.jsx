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

.jh8tlybuq {
  d: path("M12 6.5za3.25 3.25 0 0 1 3.25 3.25A3.25 3.25 0 0 1 12 13a3.25 3.25 0 0 1-3.25-3.25A3.25 3.25 0 0 1 12 6.5m0 9.5v5.5");
}

.tkd-4hbny {
  d: path("M2.5 21.5c0-4 2-6 3.5-6.5V9.5c0-4 2.75-7 6-7s6 3 6 7V15c1.5.5 3.5 2.5 3.5 6.5");
}
</style><g class="hntgybcog"><path class="tkd-4hbny"/><path class="jh8tlybuq"/></g>`,
		"fallback": "uix:hazmat-suit",
	});
}

export default Component;
