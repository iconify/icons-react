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
		"content": `<style>.hc705mb3q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.375 2.75h-4.75q-2.848 0-4.861 2.014T2.75 9.625v4.75q0 2.848 2.014 4.861t4.861 2.014h4.75q2.848 0 4.861-2.014t2.014-4.861v-4.75q0-2.848-2.014-4.861T14.375 2.75m-.634 6.944l1.334 1.631q.902 1.102.292 2.389Q14.759 15 13.335 15h-2.67q-1.424 0-2.033-1.286q-.61-1.287.292-2.389l1.335-1.631q.675-.825 1.741-.825t1.741.825");
}
</style><path class="hc705mb3q"/>`,
		"fallback": "uix-solid:caret-up-square",
	});
}

export default Component;
