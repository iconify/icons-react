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
		"content": `<style>.akpjedbrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24h37M24.001 5.5v37m3.756-33.13l11.116 11.116m-11.155-.002L38.832 9.37");
}

.wf9okgbgf {
  cx: 14.36px;
  cy: 33.669px;
  r: 5.715px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="akpjedbrj"/><circle class="wf9okgbgf"/>`,
		"fallback": "arcticons:andttt",
	});
}

export default Component;
