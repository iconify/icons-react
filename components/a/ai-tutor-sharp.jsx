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
		"content": `<style>.l5syciqzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.89 4.46l7.47 3.83l.89.46l-.89.46l-7.47 3.83l-.89.46l-.89-.46l-7.47-3.83l-.89-.46l.89-.46l7.47-3.83L12 4zM6.5 11v4.5l2 2H12m5.5-4q.42 3.08 3.5 3.5q-3.08.42-3.5 3.5q-.42-3.08-3.5-3.5q3.08-.42 3.5-3.5Z");
}
</style><path class="l5syciqzy"/>`,
		"fallback": "iconoven:ai-tutor-sharp",
	});
}

export default Component;
