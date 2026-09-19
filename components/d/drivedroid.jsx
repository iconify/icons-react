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
		"content": `<style>.b0qezeb0b {
  cx: 24.21px;
  cy: 39.53px;
  r: 3.97px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p7-vlcccv {
  cx: 12.47px;
  cy: 17.93px;
  r: 3.97px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s-wbygbug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.21 4.5l-4.38 7.58h8.76zm8.18 9.87h7.11v7.11h-7.11zm-8.18 21.19V12.08");
}

.z5n7icb_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.95 21.48v5.92H12.47v-5.5");
}
</style><circle class="b0qezeb0b"/><circle class="p7-vlcccv"/><path class="s-wbygbug"/><path class="z5n7icb_u"/>`,
		"fallback": "arcticons:drivedroid",
	});
}

export default Component;
