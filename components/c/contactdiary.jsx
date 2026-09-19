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
		"content": `<style>.ed9yw-btx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.41 7.029V4.5m19.18 2.529V4.5M7.5 16.947h33m-25.482 8.937h18.834m-18.834 7.57h12.989");
}

.nmshnxbeg {
  width: 33px;
  height: 36.471px;
  x: 7.5px;
  y: 7.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="nmshnxbeg"/><path class="ed9yw-btx"/>`,
		"fallback": "arcticons:contactdiary",
	});
}

export default Component;
