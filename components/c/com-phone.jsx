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
		"content": `<style>.b6_cnt0mh {
  cx: 24px;
  cy: 38px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cr-za5dqi {
  cx: 23.99px;
  cy: 26.76px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d99pfpbqw {
  width: 25px;
  height: 37.04px;
  x: 11.5px;
  y: 5.48px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5px;
  ry: 5px;
}

.otigzevhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.69 22.3a5.78 5.78 0 0 0-7.38-.02v.02m9.28-2.33a8.8 8.8 0 0 0-11.2 0");
}

.r_uw6hbuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.5 9.5h9");
}

.u9y2on58q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.38 17.86a11.6 11.6 0 0 0-14.8 0");
}
</style><rect class="d99pfpbqw"/><path class="r_uw6hbuz"/><circle class="b6_cnt0mh"/><path class="otigzevhd"/><path class="u9y2on58q"/><circle class="cr-za5dqi"/>`,
		"fallback": "arcticons:com-phone",
	});
}

export default Component;
