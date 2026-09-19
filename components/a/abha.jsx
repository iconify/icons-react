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
		"content": `<style>.f_v_dfbgn {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
}

.s9mkbvbgw {
  d: path("m32.6 30.762l1.415 3.092m-5.08-11.096l1.142 2.495m-9.193-6.868l3.035-6.581l3.014 6.581m-13.11 15.307l4.531-9.823m1.002-5.482h10.379l-1.535 8.4H17.821zm4.724 1.857v4.402m2.202-2.201H21.88");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="f_v_dfbgn"/><path class="s9mkbvbgw"/></g>`,
		"fallback": "arcticons:abha",
	});
}

export default Component;
