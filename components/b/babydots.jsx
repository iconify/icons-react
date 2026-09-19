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
		"content": `<style>.c5498hiju {
  cx: 24.65px;
  cy: 10.95px;
  r: 6.45px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i7h7a_b-k {
  cx: 13.68px;
  cy: 30.06px;
  r: 6.45px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tfqgn2tvj {
  cx: 34.32px;
  cy: 37.05px;
  r: 6.45px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="c5498hiju"/><circle class="i7h7a_b-k"/><circle class="tfqgn2tvj"/>`,
		"fallback": "arcticons:babydots",
	});
}

export default Component;
