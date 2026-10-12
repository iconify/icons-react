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
		"content": `<style>.fty_fghmm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 10h8.5v11.25h-8.5v-1.5Z");
}

.j-hrxqe-r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15.5h.01");
}

.u349qgbkf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5v10H2.75zm4 3.5h10.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="u349qgbkf"/><path class="fty_fghmm"/><path class="j-hrxqe-r"/></g>`,
		"fallback": "iconoven:crypto-atm-sharp",
	});
}

export default Component;
