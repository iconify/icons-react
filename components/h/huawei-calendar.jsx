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
		"content": `<style>.pzgvwfb7h {
  cx: 24px;
  cy: 27.103px;
  r: 16.397px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t4-f_k07a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.824 18.787H38.13M23.949 4.5v14.286M13.548 24.77h5.278m8.205 7.377h5.488");
}
</style><circle class="pzgvwfb7h"/><path class="t4-f_k07a"/>`,
		"fallback": "arcticons:huawei-calendar",
	});
}

export default Component;
