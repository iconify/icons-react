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
		"content": `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qa6ctvb0r {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 6.5a6.25 6.25 0 0 0 0 11m5.5-11a6.25 6.25 0 0 1 0 11M10.5 7.75h3");
}

.u_3_acqhp {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 16.25h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="c6vt1lbds"/><path class="qa6ctvb0r"/><path class="u_3_acqhp"/></g>`,
		"fallback": "iconoven:drum-brake-sharp",
	});
}

export default Component;
