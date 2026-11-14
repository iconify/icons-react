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
		"content": `<style>.niarxvb5h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.591 3.031q-.659-.66-1.591-.66t-1.591.66L9.281 4.159q-.66.659-.66 1.591t.66 1.591l1.128 1.128q.659.66 1.591.66t1.591-.66l1.128-1.128q.66-.659.66-1.591t-.66-1.591zm6.251 6.25q-.659-.66-1.591-.66t-1.591.66l-1.128 1.128q-.66.659-.66 1.591t.66 1.591l1.127 1.128q.66.66 1.592.66t1.591-.66l1.128-1.128q.66-.659.66-1.591t-.66-1.591zm-12.501 0l1.128 1.128q.66.659.66 1.591t-.66 1.591l-1.128 1.128q-.659.66-1.591.66t-1.591-.66l-1.128-1.128q-.66-.659-.66-1.591t.66-1.591l1.128-1.128q.659-.66 1.591-.66t1.591.66m8.584 7.207l.675 1.447q.95 2.038-1.088 2.99l-1.447.675q-2.038.95-2.99-1.088l-.675-1.447q-.95-2.038 1.088-2.99l1.447-.675q2.038-.95 2.99 1.088");
}
</style><path class="niarxvb5h"/>`,
		"fallback": "uix-solid:component-broken",
	});
}

export default Component;
