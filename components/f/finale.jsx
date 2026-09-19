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
		"content": `<style>.bx624wbmq {
  cx: 18.868px;
  cy: 34.776px;
  r: 8.724px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lpp96yb1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.592 34.776V4.5");
}

.yckq7tdls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.855 4.5H27.592m10.263 10.263H27.592");
}
</style><path class="lpp96yb1v"/><circle class="bx624wbmq"/><path class="yckq7tdls"/>`,
		"fallback": "arcticons:finale",
	});
}

export default Component;
