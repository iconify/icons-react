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
		"content": `<style>.hf4a2ubmv {
  width: 39px;
  height: 26.897px;
  x: 4.5px;
  y: 10.552px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.017px;
  ry: 2.017px;
}

.s59r8i2qh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.88 27.362h13.448M9.879 32.07h29.587");
}
</style><rect class="hf4a2ubmv"/><path class="s59r8i2qh"/>`,
		"fallback": "arcticons:ar-card",
	});
}

export default Component;
