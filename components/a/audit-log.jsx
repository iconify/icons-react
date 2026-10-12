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
		"content": `<style>.h3csp_bzj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 7h.01M6 11h.01M6 15h.01");
}

.k28pglbkd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 7h4.75m-4.75 4h4.75m-4.75 4h2");
}

.kvrbu3bcx {
  width: 14px;
  height: 17.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.q9g99y-wz {
  cx: 17px;
  cy: 16.25px;
  r: 4px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.um3neob_o {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 14.25v2l1.25 1.25");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="kvrbu3bcx"/><path class="h3csp_bzj"/><path class="k28pglbkd"/><circle class="q9g99y-wz"/><path class="um3neob_o"/></g>`,
		"fallback": "iconoven:audit-log",
	});
}

export default Component;
