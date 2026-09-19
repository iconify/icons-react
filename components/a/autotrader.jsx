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
		"content": `<style>.uy44r3fjg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.065 21.473l4.392-11.112h-24.49a8.42 8.42 0 0 0-7.831 5.326l-2.288 5.786zM7.79 26.677L3.458 37.64h24.49a8.42 8.42 0 0 0 7.832-5.326l2.228-5.636z");
}
</style><path class="uy44r3fjg"/>`,
		"fallback": "arcticons:autotrader",
	});
}

export default Component;
