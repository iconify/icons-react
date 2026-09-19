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
		"content": `<style>.a9p7dfbvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.78 28.94l-5.84-14.09l-.28-1.66l1.22-.99");
}

.aaomvu3tu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.52 17.33l.98 3.24l3.74 8.81M16.5 17.55l4.37-.48");
}

.r5-4j4usb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.94 14.85L19.5 20.57l-8.28 8.51l12.02.3l8.86-11.73");
}

.s03fv-bua {
  cx: 36.78px;
  cy: 28.94px;
  r: 6.72px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tooj30n6l {
  cx: 11.22px;
  cy: 29.08px;
  r: 6.72px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="s03fv-bua"/><circle class="tooj30n6l"/><path class="a9p7dfbvo"/><path class="r5-4j4usb"/><path class="aaomvu3tu"/>`,
		"fallback": "arcticons:callabike",
	});
}

export default Component;
