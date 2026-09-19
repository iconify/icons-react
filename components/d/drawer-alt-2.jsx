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
		"content": `<style>.d6-0u5r_n {
  cx: 14px;
  cy: 29px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jt3m7bbyo {
  cx: 34px;
  cy: 19px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.luceg6iis {
  cx: 24px;
  cy: 19px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m-q8bcrrk {
  cx: 14px;
  cy: 19px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n_lryccvm {
  cx: 34px;
  cy: 29px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xjsi0cl7h {
  cx: 24px;
  cy: 29px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="luceg6iis"/><circle class="jt3m7bbyo"/><circle class="m-q8bcrrk"/><circle class="xjsi0cl7h"/><circle class="n_lryccvm"/><circle class="d6-0u5r_n"/>`,
		"fallback": "arcticons:drawer-alt-2",
	});
}

export default Component;
