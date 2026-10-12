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
		"content": `<style>.jm8-mwbsa {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.25 15.75h.01m2.49 0h.01m2.49 0h.01m2.49 0h.01M8.25 18.5h.01m2.49 0h.01m2.49 0h.01m2.49 0h.01");
}

.k8gsf-j4o {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.ni531lnrc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 5.75h8.5v4h-8.5zm0 7h1m2.75 0h1m2.75 0h1");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="k8gsf-j4o"/><path class="ni531lnrc"/><path class="jm8-mwbsa"/></g>`,
		"fallback": "iconoven:calculator-scientific-sharp",
	});
}

export default Component;
