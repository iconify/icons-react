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
		"content": `<style>.gnis6y3fo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.399 17.239V5.5m10.433 16.273l10.381-10.381M31.241 33.33H42.98");
}

.n_y_m2h1b {
  cx: 14.67px;
  cy: 32.85px;
  r: 9.65px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="gnis6y3fo"/><circle class="n_y_m2h1b"/>`,
		"fallback": "arcticons:claro",
	});
}

export default Component;
