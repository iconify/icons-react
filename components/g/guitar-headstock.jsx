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

.j8ly7-y-w {
  d: path("m6.25 16.25l1.5 1.5");
}

.rsnkvx63x {
  cx: 10px;
  cy: 14px;
  r: 1.5px;
}

.s4m_h4vil {
  d: path("M13.96 14.63a5.25 5.25 0 1 1-4.59-4.59a3.75 3.75 0 1 1 4.59 4.59m5.82-11.12l.71.71q.53.53 0 1.06l-1.41 1.41q-.53.53-1.06 0l-.71-.71q-.53-.53 0-1.06l1.41-1.41q.53-.53 1.06 0m-6.03 6.74l4.1-4.1");
}
</style><g class="hntgybcog"><path class="s4m_h4vil"/><circle class="rsnkvx63x"/><path class="j8ly7-y-w"/></g>`,
		"fallback": "iconoven:guitar-headstock",
	});
}

export default Component;
