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
		"content": `<style>.cznw62bep {
  d: path("m3 9l9-4.5V18l-9-4.5Z");
}

.hbvdddbdi {
  d: path("M6 15v4.5h3v-3m5.662-7.114a3.25 3.25 0 0 1 0 3.728m2.253-5.305a6 6 0 0 1 0 6.882m2.253-8.46a8.75 8.75 0 0 1 0 10.038");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cznw62bep"/><path class="hbvdddbdi"/></g>`,
		"fallback": "uix:group-announcement",
	});
}

export default Component;
