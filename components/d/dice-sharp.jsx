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
		"content": `<style>.l3h0jolru {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.25h17.5v17.5H3.25z");
}

.sdkszkbdc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 7.75h.01m8.49 0h.01m-8.51 8.5h.01m8.49 0h.01M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="l3h0jolru"/><path class="sdkszkbdc"/></g>`,
		"fallback": "iconoven:dice-sharp",
	});
}

export default Component;
