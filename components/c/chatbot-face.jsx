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
		"content": `<style>.dp-asiefj {
  d: path("M6 4.75h12A3.25 3.25 0 0 1 21.25 8v6A3.25 3.25 0 0 1 18 17.25h-5.25l-3.9 3.15A.5.5 0 0 1 8 20v-2.75H6A3.25 3.25 0 0 1 2.75 14V8A3.25 3.25 0 0 1 6 4.75");
}

.ekop3e3sw {
  width: 2.5px;
  height: 3.5px;
  x: 7.75px;
  y: 9px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t32lf0k7h {
  width: 2.5px;
  height: 3.5px;
  x: 13.75px;
  y: 9px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="dp-asiefj"/><rect class="ekop3e3sw"/><rect class="t32lf0k7h"/></g>`,
		"fallback": "iconoven:chatbot-face",
	});
}

export default Component;
