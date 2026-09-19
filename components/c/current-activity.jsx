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
		"content": `<style>.pjdgxybno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.857 30.128l5.578-8.647l7.001 5.982l5.956-8.47");
}

.rr4d4dbaf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.238 17.858v15.66c0 4.976-3.495 8.982-7.837 8.982H13.367c-4.341 0-7.836-4.006-7.836-8.983v-17.74c0-4.977 3.495-8.983 7.837-8.983h16.68");
}

.vs-8lefmr {
  cx: 38.232px;
  cy: 9.737px;
  r: 4.237px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vs-8lefmr"/><path class="pjdgxybno"/><path class="rr4d4dbaf"/>`,
		"fallback": "arcticons:current-activity",
	});
}

export default Component;
