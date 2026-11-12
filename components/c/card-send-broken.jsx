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
		"content": `<style>.ecerw2bpo {
  d: path("M11 10L22 10M2 10L7 10");
}

.i9s-s9bxy {
  stroke-linejoin: round;
  d: path("M19 20V14M17 16L19 14L21 16");
}

.ic-2n6n4h {
  d: path("M13 16H12.5");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ktpncgb0v {
  d: path("M10 16H6");
}

.tyv_n2b2v {
  d: path("M14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4M14 4C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12");
}
</style><g class="ipq1z-bjh"><path class="i9s-s9bxy"/><path class="tyv_n2b2v"/><path class="ktpncgb0v"/><path class="ic-2n6n4h"/><path class="ecerw2bpo"/></g>`,
		"fallback": "solar:card-send-broken",
	});
}

export default Component;
