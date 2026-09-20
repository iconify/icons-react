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
		"content": `<style>.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.eo6vf-b4f {
  d: path("M10.5 10H8v7h2.5");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u-lzqwb8v {
  d: path("M13.5 10H16v7h-2.5");
}
</style><g class="hntgybcog"><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="eo6vf-b4f"/><path class="u-lzqwb8v"/></g>`,
		"fallback": "iconmind:eval-slice-outline-thin",
	});
}

export default Component;
