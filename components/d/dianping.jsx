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
		"content": `<style>.l1b5m0y8g {
  cx: 19.637px;
  cy: 12.698px;
  r: 7.196px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p7bukccef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.806 9.437a12.598 12.598 0 0 1-24.337 6.52");
}

.pp9qnwbwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.718 42.499c-2.058-7.68 2.5-15.575 10.18-17.633q0 0 0 0c7.68-2.058 15.575 2.5 17.633 10.18q0 0 0 0");
}
</style><circle class="l1b5m0y8g"/><path class="p7bukccef"/><path class="pp9qnwbwg"/>`,
		"fallback": "arcticons:dianping",
	});
}

export default Component;
