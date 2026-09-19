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
		"content": `<style>.id-6k0bxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.913 24a3.05 3.05 0 0 0-3.049 3.049h0a3.05 3.05 0 0 0 3.05 3.049h1.981a3.05 3.05 0 0 0 3.05-3.05h0A3.05 3.05 0 0 0 24.894 24");
}

.id72_3owk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.895 24a3.05 3.05 0 0 0 3.05-3.049h0a3.05 3.05 0 0 0-3.05-3.049h-1.982a3.05 3.05 0 0 0-3.049 3.05h0A3.05 3.05 0 0 0 22.915 24m-.002 0h1.982M9.5 29.07c.842.704 1.659 1.028 3.7 1.028h.35a3.42 3.42 0 0 0 3.42-3.42h0a3.42 3.42 0 0 0-3.42-3.418H9.5v-5.358h7.47M31.03 29.07c.842.704 1.659 1.028 3.7 1.028h.351a3.42 3.42 0 0 0 3.419-3.42h0a3.42 3.42 0 0 0-3.419-3.418h-4.05v-5.358H38.5");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="id-6k0bxc"/><path class="id72_3owk"/>`,
		"fallback": "arcticons:585",
	});
}

export default Component;
