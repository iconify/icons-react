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
		"content": `<style>.h0e39rbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.997 19.357a4.643 4.643 0 1 0 0 9.286v5.854C9.2 34.497 4.5 29.797 4.5 24s4.7-10.497 10.497-10.497z");
}

.vly33-bpl {
  cx: 24px;
  cy: 24px;
  r: 4.257px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vmdnxxbou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.003 19.357a4.643 4.643 0 1 1 0 9.286v5.854C38.8 34.497 43.5 29.797 43.5 24s-4.7-10.497-10.497-10.497z");
}
</style><path class="h0e39rbxh"/><circle class="vly33-bpl"/><path class="vmdnxxbou"/>`,
		"fallback": "arcticons:citizen-alert",
	});
}

export default Component;
