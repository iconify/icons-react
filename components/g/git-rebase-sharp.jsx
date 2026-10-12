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
		"content": `<style>.dyy5pkbxx {
  cx: 12px;
  cy: 6.75px;
  r: 2.25px;
}

.m-hzp_r0p {
  cx: 5px;
  cy: 17.25px;
  r: 2.25px;
}

.ruu34hb3k {
  d: path("M7.25 17.25h2.5M5 15v-3.5a4.75 4.75 0 0 1 4.75-4.75m4.5 0H19V13m-2.25-2.25L19 13l2.25-2.25");
}

.vcl8f2bsg {
  cx: 12px;
  cy: 17.25px;
  r: 2.25px;
}

.w17_uxjwj {
  cx: 19px;
  cy: 17.25px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="m-hzp_r0p"/><circle class="vcl8f2bsg"/><circle class="dyy5pkbxx"/><circle class="w17_uxjwj"/><path class="ruu34hb3k"/></g>`,
		"fallback": "iconoven:git-rebase-sharp",
	});
}

export default Component;
