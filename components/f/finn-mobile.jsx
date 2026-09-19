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
		"content": `<style>.tqys-8bnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 39.315V19.51L24 29.673L42.5 19.51v19.805m-37-30.63L24 18.848L42.5 8.685");
}
</style><path class="tqys-8bnk"/>`,
		"fallback": "arcticons:finn-mobile",
	});
}

export default Component;
