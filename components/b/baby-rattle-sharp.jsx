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
		"content": `<style>.dd59-ably {
  cx: 5.25px;
  cy: 18.75px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kny-18b_w {
  cx: 14.75px;
  cy: 9.25px;
  r: 6.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tdhqeuq6x {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.15 13.85l-3.4 3.4");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ws9qpcbzb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.5 8h.01m4.24 2.5h.01m-2.26 2h.01");
}
</style><g class="ux2u0rbkq"><circle class="kny-18b_w"/><path class="ws9qpcbzb"/><path class="tdhqeuq6x"/><circle class="dd59-ably"/></g>`,
		"fallback": "iconoven:baby-rattle-sharp",
	});
}

export default Component;
