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
		"content": `<style>.l23iq713z {
  d: path("M4.206 19a9 9 0 1 1 15.588 0M4.25 10l2.25 1.25M12 5.5V8m7.75 2l-2.25 1.25M12 14.5l3-5.25");
}

.rz0-xfb6d {
  d: path("M10.5 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l23iq713z"/><path class="rz0-xfb6d"/></g>`,
		"fallback": "uix-sharp:employee-kpi",
	});
}

export default Component;
