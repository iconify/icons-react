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
		"content": `<style>.jptzv7doh {
  cx: 17.833px;
  cy: 24px;
  r: 6.167px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mcp973vsf {
  cx: 11.667px;
  cy: 13.379px;
  r: 6.167px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n5tma464q {
  cx: 24px;
  cy: 13.379px;
  r: 6.167px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pfa2fkbdq {
  cx: 30.167px;
  cy: 24px;
  r: 6.167px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.shy2nwpdb {
  cx: 36.333px;
  cy: 13.379px;
  r: 6.167px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vf_s4ub6d {
  cx: 24px;
  cy: 34.621px;
  r: 6.167px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="shy2nwpdb"/><circle class="n5tma464q"/><circle class="mcp973vsf"/><circle class="vf_s4ub6d"/><circle class="pfa2fkbdq"/><circle class="jptzv7doh"/>`,
		"fallback": "arcticons:bubble-pop",
	});
}

export default Component;
