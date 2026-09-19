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
		"content": `<style>.ay45ryb6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.894h3.2l-.905 17.121H24");
}

.cg-b_pb0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 43.5l7.626-7.626H39.6V4.5H24");
}

.ht6rl2o1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 43.5l-7.626-7.626H8.4V4.5H24");
}

.mtds9_bmp {
  cx: 24px;
  cy: 31.174px;
  r: 2.684px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zp7q9x13m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.894h-3.2l.905 17.121H24");
}
</style><path class="ht6rl2o1k"/><path class="zp7q9x13m"/><circle class="mtds9_bmp"/><path class="cg-b_pb0c"/><path class="ay45ryb6i"/>`,
		"fallback": "arcticons:geonotes",
	});
}

export default Component;
