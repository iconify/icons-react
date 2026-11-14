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
		"content": `<style>.oacokj5iz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 7.5q0-1.973 3.273-3.179Q7.931 3.25 12 3.25t6.977 1.071Q22.25 5.527 22.25 7.5t-3.273 3.179q-2.637.971-6.227 1.062v5.009h3q1.036 0 1.768.732t.732 1.768t-.732 1.768t-1.768.732h-7.5q-1.036 0-1.768-.732T5.75 19.25t.732-1.768t1.768-.732h3v-5.009q-3.59-.091-6.227-1.062Q1.75 9.473 1.75 7.5");
}
</style><path class="oacokj5iz"/>`,
		"fallback": "uix-solid:banding-wheel",
	});
}

export default Component;
