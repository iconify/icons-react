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
		"content": `<style>.jbmv8abrr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.5 5.5h-25a2 2 0 0 0-2 2v25c0 5.523 4.477 10 10 10h25a2 2 0 0 0 2-2v-25c0-5.523-4.477-10-10-10m-18 15.125h5.401");
}

.whawzkbwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.251 27.375H14.5V13.874h6.751M33.5 25.097a4.47 4.47 0 0 0-4.472-4.472h0a4.47 4.47 0 0 0-4.473 4.472v4.557a4.47 4.47 0 0 0 4.473 4.472h0a4.47 4.47 0 0 0 4.472-4.472h-4.472");
}
</style><path class="jbmv8abrr"/><path class="whawzkbwx"/>`,
		"fallback": "arcticons:eg-payment",
	});
}

export default Component;
