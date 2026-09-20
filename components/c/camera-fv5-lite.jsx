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
		"content": `<style>.b1mxjlboz {
  cx: 24px;
  cy: 24px;
  r: 7.13px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.glqn__bjg {
  cx: 15.67px;
  cy: 33.02px;
  r: 7.13px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h6qni_bhb {
  cx: 24px;
  cy: 24px;
  r: 14.03px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.joekbf98g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.17 20.22a14.03 14.03 0 0 1-11.85 6.51c-7.75 0-14.03-6.28-14.03-14.03c0-3.86 1.59-7.55 4.39-10.2");
}
</style><circle class="cpk0fnbgt"/><circle class="b1mxjlboz"/><circle class="glqn__bjg"/><circle class="h6qni_bhb"/><path class="joekbf98g"/>`,
		"fallback": "arcticons:camera-fv5-lite",
	});
}

export default Component;
