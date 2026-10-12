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
		"content": `<style>.hzt89hucj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 9.25a5 5 0 0 1 6.5 0m-9.5-3.5a9.5 9.5 0 0 1 12.5 0");
}

.r8i1ocbvm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17.25h.01");
}

.tbmg8nbpb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 18.25a8.25 5 0 0 1 16.5 0v2.5H3.75v-2Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="tbmg8nbpb"/><path class="r8i1ocbvm"/><path class="hzt89hucj"/></g>`,
		"fallback": "iconoven:access-point-sharp",
	});
}

export default Component;
