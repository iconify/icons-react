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
		"content": `<style>.awzm9ec2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.917 19.412v9.176");
}

.ilk1h0b_g {
  cx: 10.654px;
  cy: 17.065px;
  r: 2.695px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wmfo0sb7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.77 14.3l-8.853 5.112v-6.195a2.306 2.306 0 0 0-2.306-2.306H6.806A2.306 2.306 0 0 0 4.5 13.217v21.566a2.306 2.306 0 0 0 2.306 2.306h23.805a2.306 2.306 0 0 0 2.306-2.306v-6.195l8.853 5.111a1.153 1.153 0 0 0 1.73-.998V15.299c0-.887-.96-1.442-1.73-.998");
}
</style><path class="wmfo0sb7v"/><circle class="ilk1h0b_g"/><path class="awzm9ec2j"/>`,
		"fallback": "arcticons:adv-screen-recorder",
	});
}

export default Component;
