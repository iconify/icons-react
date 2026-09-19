import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lma_fnblm {
  cx: 14.411px;
  cy: 18.365px;
  r: 3.726px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pbweno-oc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.07 26.43c0 8.875-7.195 16.07-16.07 16.07S7.93 35.305 7.93 26.43z");
}

.pz0i5zbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.818 5.577l-2.73.73a2.24 2.24 0 0 0-1.582 2.742l.669 2.496a2.24 2.24 0 0 0 2.741 1.582l2.729-.73a2.24 2.24 0 0 0 1.582-2.742L26.56 7.16a2.24 2.24 0 0 0-2.742-1.582M37.78 19.665l-8.837 2.368l2.368-8.837z");
}
</style><path class="pbweno-oc"/><circle class="lma_fnblm"/><path class="pz0i5zbeo"/>`,
		"fallback": "arcticons:hungerbox-cafe",
	});
}

export default Component;
