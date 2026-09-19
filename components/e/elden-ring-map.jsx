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
		"content": `<style>.ir-lbacxu {
  cx: 30.112px;
  cy: 29.645px;
  r: 12.888px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vnq4b5bqx {
  cx: 23.439px;
  cy: 18.355px;
  r: 12.888px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wqqxznbjw {
  cx: 17.888px;
  cy: 29.645px;
  r: 12.888px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vnq4b5bqx"/><circle class="ir-lbacxu"/><circle class="wqqxznbjw"/>`,
		"fallback": "arcticons:elden-ring-map",
	});
}

export default Component;
