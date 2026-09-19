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
		"content": `<style>.chhoomerj {
  width: 31px;
  height: 8.5px;
  x: 8.5px;
  y: 17.125px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
}

.hvzqn00lz {
  width: 31px;
  height: 14px;
  x: 8.5px;
  y: 29.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
}

.sd1m56bxt {
  cx: 34.75px;
  cy: 33.75px;
  r: 1.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vpznabclk {
  cx: 34.75px;
  cy: 9px;
  r: 1.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xl7qmnbkh {
  width: 31px;
  height: 8.5px;
  x: 8.5px;
  y: 4.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
}

.yc7k2bh1j {
  cx: 34.75px;
  cy: 21.375px;
  r: 1.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="xl7qmnbkh"/><rect class="chhoomerj"/><rect class="hvzqn00lz"/><circle class="vpznabclk"/><circle class="yc7k2bh1j"/><circle class="sd1m56bxt"/>`,
		"fallback": "arcticons:agenda",
	});
}

export default Component;
