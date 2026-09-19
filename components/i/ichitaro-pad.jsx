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
		"content": `<style>.fhs8tj_sz {
  cx: 24px;
  cy: 12.438px;
  r: 1.812px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.iiqxfi0up {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v5.126M14.75 5.5v5.126M33.25 5.5v5.126");
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

.kpjzoq2dq {
  cx: 14.75px;
  cy: 12.438px;
  r: 1.812px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x7sv9egox {
  cx: 33.25px;
  cy: 12.438px;
  r: 1.812px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xon4v-xok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 21.688h23.125v4.625H5.5z");
}
</style><rect class="j3s9ivbxi"/><path class="xon4v-xok"/><circle class="fhs8tj_sz"/><circle class="x7sv9egox"/><circle class="kpjzoq2dq"/><path class="iiqxfi0up"/>`,
		"fallback": "arcticons:ichitaro-pad",
	});
}

export default Component;
