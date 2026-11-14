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
		"content": `<style>.l77s421dc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.875 1.75h10.25q2.123 0 3.624 1.501t1.501 3.624v10.25q0 2.123-1.501 3.624t-3.624 1.501H6.875q-2.123 0-3.624-1.501T1.75 17.125V6.875q0-2.123 1.501-3.624T6.875 1.75m3.125 3H7Q4.75 4.75 4.75 7v1q0 2.25 2.25 2.25h3q2.25 0 2.25-2.25V7q0-2.25-2.25-2.25m6 0q-2.25 0-2.25 2.25v4q0 .932.659 1.591T16 13.25h1q.932 0 1.591-.659T19.25 11V7q0-2.25-2.25-2.25zm-6 7H7q-2.25 0-2.25 2.25v3q0 2.25 2.25 2.25h3q2.25 0 2.25-2.25v-3q0-2.25-2.25-2.25m6 3q-2.25 0-2.25 2.25T16 19.25h1q2.25 0 2.25-2.25T17 14.75z");
}
</style><path class="l77s421dc"/>`,
		"fallback": "uix-solid:figure-ground",
	});
}

export default Component;
