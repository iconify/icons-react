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
		"content": `<style>.ivsuhb0-x {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 4.25H6.875q-2.123 0-3.624 1.501T1.75 9.375v5.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624v-5.25q0-2.123-1.501-3.624T17.125 4.25M8.188 15.375Q4.75 15.375 4.75 12t3.438-3.375q2.465 0 3.812 1.848q1.347-1.848 3.813-1.848q3.437 0 3.437 3.375t-3.437 3.375q-2.466 0-3.813-1.848q-1.347 1.848-3.812 1.848");
}
</style><path class="ivsuhb0-x"/>`,
		"fallback": "uix-solid:data-plan-unlimited",
	});
}

export default Component;
