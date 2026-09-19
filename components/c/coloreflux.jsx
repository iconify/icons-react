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
		"content": `<style>.ahxucxnce {
  cx: 23.648px;
  cy: 12.222px;
  r: 4.609px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m43wr4w0n {
  cx: 36.414px;
  cy: 30.716px;
  r: 4.609px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rpomccc2j {
  cx: 12.634px;
  cy: 31.823px;
  r: 4.609px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xj_5ac8qp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.82 10.26h12.19v4.24H27.65M4.272 36.432h13.93v4.242H4.272z");
}
</style><circle class="ahxucxnce"/><circle class="m43wr4w0n"/><circle class="rpomccc2j"/><path class="xj_5ac8qp"/>`,
		"fallback": "arcticons:coloreflux",
	});
}

export default Component;
