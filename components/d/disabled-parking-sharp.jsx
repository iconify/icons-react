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
		"content": `<style>.stev3uadc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 7.25v4.25h3.75l1.75 3.75h1.25m-6.75-6h3m-5.25 1a3.5 3.5 0 1 0 5 4.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ywno-sh7h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.z1kgyetnn {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 5.25h.01");
}
</style><g class="ux2u0rbkq"><path class="ywno-sh7h"/><path class="z1kgyetnn"/><path class="stev3uadc"/></g>`,
		"fallback": "iconoven:disabled-parking-sharp",
	});
}

export default Component;
