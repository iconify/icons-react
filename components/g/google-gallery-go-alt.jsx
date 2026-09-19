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
		"content": `<style>.h3hwekbjo {
  width: 37px;
  height: 30px;
  x: 5.5px;
  y: 9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.jcd40wb2d {
  cx: 31px;
  cy: 20px;
  r: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zsr_u1b8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.9 39c0-9.61-7.79-17.4-17.4-17.4");
}
</style><rect class="h3hwekbjo"/><circle class="jcd40wb2d"/><path class="zsr_u1b8o"/>`,
		"fallback": "arcticons:google-gallery-go-alt",
	});
}

export default Component;
