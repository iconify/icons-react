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
		"content": `<style>.b3hzthn_j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 16.75h.01m3.49 0h.01m3.49 0h.01");
}

.qaqcvgffg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.25V6.5c0-2 3.75-3.75 8.5-3.75s8.5 1.75 8.5 3.75v1.75a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V7c-1.2-.4-2.6-.6-4-.6s-2.8.2-4 .6v1.25a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1m2.75 4h11.5q1.5 0 1.75 1.48l1 6.04q.25 1.48-1.25 1.48H4.75q-1.5 0-1.25-1.48l1-6.04q.25-1.48 1.75-1.48");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="qaqcvgffg"/><path class="b3hzthn_j"/></g>`,
		"fallback": "iconoven:desk-phone",
	});
}

export default Component;
