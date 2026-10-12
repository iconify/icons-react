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
		"content": `<style>.kr9hw9brb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.9 14.25h.01");
}

.p7z70mbyq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.75 11.5h4.5V17h-4.5a2.75 2.75 0 0 1 0-5.5Z");
}

.s1y-0r_6c {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.75h12.5v4.5H5.25zm-2.5 4.5h18.5v14H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="s1y-0r_6c"/><path class="p7z70mbyq"/><path class="kr9hw9brb"/></g>`,
		"fallback": "iconoven:cards-sharp",
	});
}

export default Component;
