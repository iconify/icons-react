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

.w-s8ckb3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.693 18.022v8.272c0 .768.622 1.39 1.39 1.39h.417m-1.807-7.368h1.459m-23.457 5.968a2.78 2.78 0 0 1-5.195-1.38v-1.808a2.78 2.78 0 0 1 2.78-2.78a2.78 2.78 0 0 1 2.412 1.396m11.211 5.972v-4.588a2.78 2.78 0 1 0-5.56 0m-.001 4.588v-7.368m13.413 5.964a2.78 2.78 0 0 1-5.196-1.377v-1.807a2.78 2.78 0 1 1 5.56 0V24h-5.56M17.455 34.426V13.573");
}
</style><rect class="j3s9ivbxi"/><path class="w-s8ckb3o"/>`,
		"fallback": "arcticons:cnet",
	});
}

export default Component;
