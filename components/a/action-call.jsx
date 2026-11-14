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
		"content": `<style>.qhx-11oiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5h18v10H3Zm-.728-3.424l16.629-3.534l.728 3.424L3 10.5Zm4.402-.935l2.684 3.008m2.207-4.048l2.684 3.008");
}
</style><path class="qhx-11oiy"/>`,
		"fallback": "uix-sharp:action-call",
	});
}

export default Component;
