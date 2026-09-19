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

.sf_n1jb3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.433 18.551v12.337A4.11 4.11 0 0 1 18.321 35h0a4.1 4.1 0 0 1-2.908-1.205");
}

.ss8tzac0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.005 29.449v-13.57A2.88 2.88 0 0 1 30.883 13h0c1.417 0 2.301.42 2.908 1.204m-8.224 4.347h5.757");
}

.z2d62lsyb {
  width: 8.224px;
  height: 10.897px;
  x: 14.209px;
  y: 18.551px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.112px;
  ry: 4.112px;
}
</style><path class="i9clfwm2k"/><path class="sf_n1jb3e"/><rect transform="matrix(-1 0 0 -1 36.642 48)" class="z2d62lsyb"/><path class="ss8tzac0q"/>`,
		"fallback": "arcticons:globalfreecall",
	});
}

export default Component;
