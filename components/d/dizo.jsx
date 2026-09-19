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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.r90darmhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 29.714V18.286h2.571a5 5 0 0 1 5 5v1.428a5 5 0 0 1-5 5zm10.089-11.428v11.428m2.402-11.428h7.571l-7.571 11.428h7.571");
}

.st4quac_q {
  width: 7.571px;
  height: 11.429px;
  x: 30.929px;
  y: 18.286px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.786px;
  ry: 3.786px;
}
</style><path class="i9clfwm2k"/><path class="r90darmhr"/><rect class="st4quac_q"/>`,
		"fallback": "arcticons:dizo",
	});
}

export default Component;
