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
		"content": `<style>.e4ndw5b_d {
  d: path("M13.6 17.5H2.5V4h18v7.9");
}

.pe0z9lbye {
  d: path("m3.5 5.5l8 5.5l8-5.5M15 14.75h6.5L19 18v2.75l-1.5-1V18Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e4ndw5b_d"/><path class="pe0z9lbye"/></g>`,
		"fallback": "uix-sharp:email-triage",
	});
}

export default Component;
