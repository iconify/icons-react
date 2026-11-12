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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.na80fjbih {
  d: path("M7 9C7 9 7.5 9.9 7.5 12C7.5 14.1 7 15 7 15");
}

.ovw1pubnt {
  d: path("M10 20H11.5C15.2712 20 17.1569 20 18.3284 18.8284C19.5 17.6569 19.5 15.7712 19.5 12C19.5 8.22876 19.5 6.34315 18.3284 5.17157C17.1569 4 15.2712 4 11.5 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z");
}

.tnfby2q5d {
  d: path("M22 14L22 10");
}
</style><g class="ipq1z-bjh"><path class="ovw1pubnt"/><path class="na80fjbih"/><path class="tnfby2q5d"/></g>`,
		"fallback": "solar:battery-low-minimalistic-linear",
	});
}

export default Component;
