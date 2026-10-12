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
		"content": `<style>.us8yr3b2t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 13.25h6.5V18h-6.5zm1.5 0v-2.5h3.5v2.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wrvq5p2tg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5v16.5H2.75zm0 4.25h18.5");
}

.yhlolccrq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5.9h.01m2.74 0h.01");
}
</style><g class="ux2u0rbkq"><path class="wrvq5p2tg"/><path class="yhlolccrq"/><path class="us8yr3b2t"/></g>`,
		"fallback": "iconoven:https-lock-sharp",
	});
}

export default Component;
