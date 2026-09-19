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
		"content": `<style>.iyqajff_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 21.25a3 3 0 0 0-1.246 5.729L21.5 33h5l-1.254-6.021A3 3 0 0 0 24 21.25m0-6.75v-9");
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

.v79suxbwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 38.5c16.174-6.442 19.5-29 7-29c-4.407 0-6.5 2.934-6.5 5c0 5.997 8.147 4.723 5.98-.527M24 38.5c-16.174-6.442-19.5-29-7-29c4.407 0 6.5 2.934 6.5 5c0 5.997-8.147 4.723-5.98-.527M24 38.5v4M13.498 27.122v11m-5.5-5.5h11m-1.611-3.889l-7.778 7.778m0-7.778l7.778 7.778m18.43-26.793v7m-3.5-3.5h7m-1.025-2.475l-4.95 4.95m0-4.95l4.95 4.95m-2.475 18.434v5m-2.5-2.5h5m-.732-1.767l-3.535 3.536m0-3.536l3.536 3.536");
}
</style><rect class="j3s9ivbxi"/><path class="iyqajff_k"/><path class="v79suxbwg"/>`,
		"fallback": "arcticons:idolland-pripara",
	});
}

export default Component;
