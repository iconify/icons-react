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
		"content": `<style>.o9y80h9vf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 3.25H6.875q-2.123 0-3.624 1.501T1.75 8.375v7.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624v-7.25q0-2.123-1.501-3.624T17.125 3.25m-3.534 5.281l1.878 1.878q.66.659.66 1.591t-.66 1.591l-1.878 1.878q-.659.66-1.591.66t-1.591-.66l-1.878-1.878q-.66-.659-.66-1.591t.66-1.591l1.878-1.878q.659-.66 1.591-.66t1.591.66");
}
</style><path class="o9y80h9vf"/>`,
		"fallback": "uix-solid:component-slot",
	});
}

export default Component;
