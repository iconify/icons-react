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
		"content": `<style>.gswsjr-cj {
  d: path("M18 7c-1.5 -1.5 -4 -1.5 -4 -3.5 0 -1.5 1.5 -2 2.5 -1 1 -1 2.5 -0.5 2.5 1 0 2 -1 2 -1 3.5");
}

.haqmubngg {
  fill: currentColor;
  d: path("M3 10h18v10H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mh_3yqm3z {
  d: path("M3 10h18v10H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.odoaae72y {
  d: path("M11 10v10");
}

.z2ek4fbxu {
  fill: currentColor;
  d: path("M18 7c-1.5 -1.5 -4 -1.5 -4 -3.5 0 -1.5 1.5 -2 2.5 -1 1 -1 2.5 -0.5 2.5 1 0 2 -1 2 -1 3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="haqmubngg"/><path class="z2ek4fbxu"/><path class="mh_3yqm3z"/><path class="odoaae72y"/><path class="gswsjr-cj"/></g>`,
		"fallback": "iconmind:health-bar-duotone-regular",
	});
}

export default Component;
