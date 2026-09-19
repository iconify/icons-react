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
		"content": `<style>.cveg_0bdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.842 30.529V17.471h4.187c2.367 0 4.286 1.963 4.286 4.385s-1.919 4.386-4.286 4.386h-4.187m4.189-.001l4.189 4.285m-13.466-4.323h-5.666m-1.403 4.326l4.237-13.058l4.236 13.058");
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
</style><rect class="j3s9ivbxi"/><path class="cveg_0bdt"/>`,
		"fallback": "arcticons:artefact",
	});
}

export default Component;
