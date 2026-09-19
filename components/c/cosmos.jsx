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
		"content": `<style>.ga-1qubuc {
  cx: 24px;
  cy: 9.029px;
  r: 4.081px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gpo8z8wkc {
  cx: 24px;
  cy: 38.867px;
  r: 4.081px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j4xg4js2s {
  cx: 11.08px;
  cy: 31.408px;
  r: 4.081px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.txriz5b2o {
  cx: 36.92px;
  cy: 16.489px;
  r: 4.081px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.u0u_65bsx {
  cx: 11.08px;
  cy: 16.489px;
  r: 4.081px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vikhsj6iy {
  cx: 36.92px;
  cy: 31.408px;
  r: 4.081px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ga-1qubuc"/><circle class="gpo8z8wkc"/><circle class="u0u_65bsx"/><circle class="vikhsj6iy"/><circle class="j4xg4js2s"/><circle class="txriz5b2o"/>`,
		"fallback": "arcticons:cosmos",
	});
}

export default Component;
