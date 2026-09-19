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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.k4o_yjbkq {
  cx: 24px;
  cy: 24px;
  r: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.o1nqn_0yw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.584 26.951l3.167-2.683l2.982 1.975l5.739-5.292l2.832 2.274l5.218-4.025M15.876 32.721v-4.827m4.062 7.007v-6.224M24 35.627V25.565m4.062 9.336v-9.093m4.062 6.503v-8.572");
}
</style><rect class="j3s9ivbxi"/><circle class="k4o_yjbkq"/><path class="o1nqn_0yw"/>`,
		"fallback": "arcticons:adobe-analytics",
	});
}

export default Component;
