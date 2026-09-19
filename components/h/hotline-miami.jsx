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
		"content": `<style>.a2m2elbvn {
  cx: 26.519px;
  cy: 22.459px;
  r: 15.6px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bsz11db_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.044 20.923H3.5m2.795-7.102l30.946-2.338m3.431 17.543H4.77m8.729 2.028v7.971m13.935-.966v1.982m7.633-4.532v7.632M22.772 20.923v1.536m-6.035-4.916v-4.5m18.33 7.88v1.841m4.117 1.982v-3.823m-7.393 3.422v.973m10.709 5.25v.973M22.772 16.886v.972M10.563 7.672v.973");
}
</style><circle class="a2m2elbvn"/><path class="bsz11db_r"/>`,
		"fallback": "arcticons:hotline-miami",
	});
}

export default Component;
