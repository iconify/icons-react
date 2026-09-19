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
		"content": `<style>.eleewabxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.402 15.69h5.753m19.775 0h5.753M36.8 12.81v5.753M14.66 20.9h18.77v7.699H14.66zM4.5 32.29c10.16 0 10.16 1.738 19.5 1.738c9.428 0 9.428-1.738 19.5-1.738");
}

.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="jc1oydeao"/><path class="eleewabxr"/>`,
		"fallback": "arcticons:erelaxvsmart",
	});
}

export default Component;
