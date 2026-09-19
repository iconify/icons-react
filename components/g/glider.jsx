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
		"content": `<style>.i52ir2wah {
  cx: 24px;
  cy: 10.065px;
  r: 4.565px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ifw5dhb7f {
  cx: 24px;
  cy: 37.935px;
  r: 4.565px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j7wxopbvk {
  cx: 10.065px;
  cy: 37.935px;
  r: 4.565px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lzy657qln {
  cx: 37.935px;
  cy: 37.935px;
  r: 4.565px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rmzc42dyi {
  cx: 37.876px;
  cy: 24px;
  r: 4.565px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="i52ir2wah"/><circle class="rmzc42dyi"/><circle class="lzy657qln"/><circle class="ifw5dhb7f"/><circle class="j7wxopbvk"/>`,
		"fallback": "arcticons:glider",
	});
}

export default Component;
