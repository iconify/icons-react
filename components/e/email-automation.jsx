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
		"content": `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.ptwb47buy {
  d: path("m5 3l6 6l6-6m3.75 15.5A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wx6yjlb8s {
  d: path("M13 16H2.5V3h17v9.9");
}
</style><g class="ulnmmdpxh"><path class="wx6yjlb8s"/><path class="ptwb47buy"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:email-automation",
	});
}

export default Component;
