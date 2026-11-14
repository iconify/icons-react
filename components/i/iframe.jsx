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
		"content": `<style>.bebb7kbpa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 1.75H6.875q-2.123 0-3.624 1.501T1.75 6.875v10.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624V6.875q0-2.123-1.501-3.624T17.125 1.75m-1.75 7.5q3.375 0 3.375 3.375v3.25q0 3.375-3.375 3.375h-6.75q-3.375 0-3.375-3.375v-3.25q0-3.375 3.375-3.375z");
}
</style><path class="bebb7kbpa"/>`,
		"fallback": "uix-solid:iframe",
	});
}

export default Component;
