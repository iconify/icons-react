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
		"content": `<style>.bkc9cjaff {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25h18.5v15.5H2.75z");
}

.h1wnxrb-e {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 8.25h.01M6 12h.01M6 15.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.y-r00cryc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 8.25h8m-8 7.5h6M9.5 12h8");
}
</style><g class="ux2u0rbkq"><path class="bkc9cjaff"/><path class="h1wnxrb-e"/><path class="y-r00cryc"/></g>`,
		"fallback": "iconoven:channel-guide-sharp",
	});
}

export default Component;
