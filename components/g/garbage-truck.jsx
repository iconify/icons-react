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
		"content": `<style>.ksuof3r5e {
  cx: 8.75px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o1khsik-g {
  cx: 17.75px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.px0dp75uh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 19h.01");
}

.v2aye1hei {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 5.25H13q1 0 1 1V8q0 1 1 1h2q1 0 1.68.73l1.89 2.04q.68.73.68 1.73v2.25q0 1-1 1H6.75q-1 0-1-1V13.5q0-1-1-1h-1q-1 0-1-1v-.75q0-1 .71-1.71l3.08-3.08q.71-.71 1.71-.71M14 9v7.75");
}

.y0ijwrb2n {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 19h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="v2aye1hei"/><circle class="ksuof3r5e"/><path class="y0ijwrb2n"/><circle class="o1khsik-g"/><path class="px0dp75uh"/></g>`,
		"fallback": "iconoven:garbage-truck",
	});
}

export default Component;
