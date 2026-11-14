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
		"content": `<style>.ovqx3tbrs {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.375 2.75h-4.75q-2.848 0-4.861 2.014T2.75 9.625v4.75q0 2.848 2.014 4.861t4.861 2.014h4.75q2.848 0 4.861-2.014t2.014-4.861v-4.75q0-2.848-2.014-4.861T14.375 2.75m-4.681 7.509l1.631-1.334q1.102-.902 2.389-.292Q15 9.241 15 10.665v2.67q0 1.424-1.286 2.033q-1.287.61-2.389-.292l-1.631-1.335q-.825-.675-.825-1.741t.825-1.741");
}
</style><path class="ovqx3tbrs"/>`,
		"fallback": "uix-solid:caret-left-square",
	});
}

export default Component;
