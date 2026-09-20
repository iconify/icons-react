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
		"content": `<style>.j3s9ivbxi {
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

.sqc3jrb4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.117 22.142v-7.433h1.778c1.006 0 1.82.817 1.82 1.825s-.814 1.824-1.82 1.824h-1.778m1.778 0l1.778 3.782m7.185.001v-7.432l3.598 7.432v-7.432m1.772 7.432v-7.432l3.599 7.432v-7.432m5.37 0l-1.799 4.716l-1.799-4.716m1.799 7.432v-2.716m-14.908.254h-2.406m-.597 2.462l1.8-7.432l1.799 7.432m-10.685-5.632a1.8 1.8 0 0 0-3.599 0v3.834a1.8 1.8 0 0 0 3.599 0v-.985h-1.799m12.537 7.982l1.722-.938v6.889");
}
</style><rect class="j3s9ivbxi"/><path class="sqc3jrb4l"/>`,
		"fallback": "arcticons:granny-1",
	});
}

export default Component;
