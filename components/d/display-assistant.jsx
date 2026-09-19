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
		"content": `<style>.kafy2-ton {
  cx: 30px;
  cy: 31px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qtgsqktdi {
  cx: 24px;
  cy: 24px;
  r: 14.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qxkqzns9v {
  cx: 18px;
  cy: 17px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uvifvu5mz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 24h-4m43 0h-4M24 6.5v-4m0 43v-4M11.626 11.626L8.798 8.798m30.405 30.405l-2.828-2.828m-.001-24.749l2.828-2.828M8.797 39.203l2.829-2.828M16 31h12m-7.5-14H32m-16 7h6m4 0h6");
}

.xm8sqtbrk {
  cx: 24px;
  cy: 24px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="qtgsqktdi"/><circle class="xm8sqtbrk"/><circle class="qxkqzns9v"/><circle class="kafy2-ton"/><path class="uvifvu5mz"/>`,
		"fallback": "arcticons:display-assistant",
	});
}

export default Component;
