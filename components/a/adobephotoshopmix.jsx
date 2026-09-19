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
		"content": `<style>.lne2rnzfp {
  cx: 21px;
  cy: 21px;
  r: 7.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.syk00hq5j {
  cx: 26.5px;
  cy: 26.5px;
  r: 7.5px;
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 1 1.78;
  stroke-dashoffset: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w1nzpcbgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40 5.5H7a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Z");
}
</style><path class="w1nzpcbgy"/><circle class="lne2rnzfp"/><circle class="syk00hq5j"/>`,
		"fallback": "arcticons:adobephotoshopmix",
	});
}

export default Component;
