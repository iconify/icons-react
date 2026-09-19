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
		"content": `<style>.enff-muad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.873 10.1h4.717v4.717H9.873zm7.476 0h4.717v4.717h-4.717zm7.45 15.084h4.717v4.717h-4.717zm7.476 0h4.717v4.717h-4.717zm-22.402 0h4.717v4.717H9.873zm7.476 0h4.717v4.717h-4.717zm7.45 7.476h4.717v4.717h-4.717zm-14.926 0h4.717v4.717H9.873zm7.476 0h4.717v4.717h-4.717zm14.926 0h4.717v4.717h-4.717zM9.873 17.642h4.717v4.717H9.873zm7.476 0h4.717v4.717h-4.717zM29.062 10.1v4.263h-4.263v3.672h4.263v4.263h3.672v-4.263h4.259v-3.672h-4.259V10.1z");
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
</style><rect class="j3s9ivbxi"/><path class="enff-muad"/>`,
		"fallback": "arcticons:crontosignswiss",
	});
}

export default Component;
