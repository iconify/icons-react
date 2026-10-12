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
		"content": `<style>.p_gnhwivz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.5 16.75h.01");
}

.uca16cvvx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.75 7.25h1.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ww4t9bb-h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h10.5v9.5H2.75zM8 14.25v4.5m-2.5 0h5m5.25-15h5.5v16.5h-5.5z");
}
</style><g class="ux2u0rbkq"><path class="ww4t9bb-h"/><path class="p_gnhwivz"/><path class="uca16cvvx"/></g>`,
		"fallback": "iconoven:desktop-sharp",
	});
}

export default Component;
