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
		"content": `<style>.lq-35ubqy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m12.363 12.5l-1.038.589Q6.779 15.66 4.97 17.47q-1.51 1.51-.928 3.183q.637 1.833 3.033 1.593l.018-.002q3.197-.399 5.039-3.277q1.593-2.49 1.618-5.861l2.971-10.4q.041-.143.024-.292q-.017-.148-.089-.278q-.073-.131-.19-.223q-.117-.093-.26-.134q-.071-.02-.145-.026q-.073-.007-.147.002q-.073.008-.143.031q-.071.023-.135.058t-.121.084t-.102.106t-.08.123t-.054.137zm3.137 6q0-3.25 3.25-3.25T22 18.5t-3.25 3.25t-3.25-3.25");
}
</style><path class="lq-35ubqy"/>`,
		"fallback": "uix-solid:hurling-stick",
	});
}

export default Component;
