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
		"content": `<style>.w4_u9rtiu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.75 1.75h8.5q2.485 0 4.243 1.757Q22.25 5.265 22.25 7.75v8.5q0 2.485-1.757 4.243q-1.758 1.757-4.243 1.757h-8.5q-2.485 0-4.243-1.757Q1.75 18.735 1.75 16.25v-8.5q0-2.485 1.757-4.243Q5.265 1.75 7.75 1.75m7 3.25h-5.5Q7.49 5 6.245 6.245T5 9.25v5.5q0 1.76 1.245 3.005T9.25 19h5.5q1.76 0 3.005-1.245T19 14.75v-5.5q0-1.76-1.245-3.005T14.75 5");
}
</style><path class="w4_u9rtiu"/>`,
		"fallback": "uix-solid:box-model-css",
	});
}

export default Component;
