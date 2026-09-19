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
		"content": `<style>.t_ymtlbsq {
  cx: 33.13px;
  cy: 30.687px;
  r: 9.37px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vcxu05dtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.757 30.63l.071-22.687m-10.223 3.14c4.192 1.818 5.22 7.141 6.266 11.248c-2.561 1.81-10.287-2.452-14.371-9.6c4.174.573 8.603 2.21 14.42 9.63");
}
</style><circle class="t_ymtlbsq"/><path class="vcxu05dtm"/>`,
		"fallback": "arcticons:bamboohr",
	});
}

export default Component;
