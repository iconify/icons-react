import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qsm8qtw0l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14 5.5q0-4 4-4t4 4t-4 4t-4-4M9.5 8.75q-7.25 0-7.25 3.25v7q0 3.25 7.25 3.25T16.75 19v-7q0-3.25-7.25-3.25m5.75 6.75q0 1.75-5.75 1.75T3.75 15.5v-1.216q1.798.966 5.75.966t5.75-.966zm0 2.284V19q0 1.75-5.75 1.75T3.75 19v-1.216q1.798.966 5.75.966t5.75-.966");
}
</style><path class="qsm8qtw0l"/>`,
		"fallback": "uix-solid:coins-crypto",
	});
}

export default Component;
