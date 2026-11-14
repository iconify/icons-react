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
		"content": `<style>.ae9j4hb0i {
  d: path("M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.hdsckdb4f {
  d: path("M6.5 7h8M9 3.25c2.25 2.25 2.25 5.25 0 7.5M3 17.5h.01m.74-4.75h.01M13.5 15h8m-7 0l1.5 5.5h3l1.5-5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ae9j4hb0i"/><path class="hdsckdb4f"/></g>`,
		"fallback": "uix:alley-oop",
	});
}

export default Component;
