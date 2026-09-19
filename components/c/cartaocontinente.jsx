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
		"content": `<style>.hmizyiyip {
  cx: 24px;
  cy: 24px;
  r: 8.622px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
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

.sl4_z-bki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.202 26.816a3.43 3.43 0 0 1-2.976 1.726h0a3.43 3.43 0 0 1-3.428-3.428v-2.228a3.43 3.43 0 0 1 3.428-3.428h0c1.271 0 2.381.692 2.973 1.72");
}

.zj59rjbnw {
  cx: 27.44px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}
</style><rect class="jc1oydeao"/><path class="sl4_z-bki"/><circle class="hmizyiyip"/><circle class="zj59rjbnw"/>`,
		"fallback": "arcticons:cartaocontinente",
	});
}

export default Component;
