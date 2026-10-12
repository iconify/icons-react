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
		"content": `<style>.hz6nloawv {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.5 19h.01");
}

.i316mtvax {
  cx: 12.5px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j2hjsxbon {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.75 4.5h3.5v9h-3.5zm1.75 9V18");
}

.r-v9604fi {
  cx: 5.5px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s-l9pcb8g {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25h12.5v9.5H2.75zm0 4h12.5M9 7.25v4");
}

.ufcahkbfz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.5 19h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="s-l9pcb8g"/><circle class="r-v9604fi"/><path class="ufcahkbfz"/><circle class="i316mtvax"/><path class="hz6nloawv"/><path class="j2hjsxbon"/></g>`,
		"fallback": "iconoven:field-trip-sharp",
	});
}

export default Component;
