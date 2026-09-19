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
		"content": `<style>.eti3crb1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 12h7.714v7.714H12zm16.286 0H36v7.714h-7.714zm0 16.286H36V36h-7.714zm-16.286 0h7.714V36H12z");
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

.p871z-gxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36 19.714l-16.286 8.572L28.286 12M12 19.714l7.714 8.572v-8.572M28.286 36l-8.572-7.714h8.572");
}
</style><rect class="j3s9ivbxi"/><path class="eti3crb1s"/><path class="p871z-gxj"/>`,
		"fallback": "arcticons:adobe-connect",
	});
}

export default Component;
