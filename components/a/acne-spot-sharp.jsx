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
		"content": `<style>.j7iy7ccxz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.83 10.25L8.54 9.5m5.63.75l1.29-.75");
}

.meoxs6j0n {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11.5h.01");
}

.mol-t4-is {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.75c4 0 6-.25 7-1.75s3.5-1.5 4.5 0s3 1.75 7 1.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="mol-t4-is"/><path class="meoxs6j0n"/><path class="j7iy7ccxz"/></g>`,
		"fallback": "iconoven:acne-spot-sharp",
	});
}

export default Component;
