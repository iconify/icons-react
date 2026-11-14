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
		"content": `<style>.kmi6ldqsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h17v8h-17Zm9.7 18.75H2.5v-8h12.7M6 6.5h.01M6 17.25h.01m8.99.25h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="kmi6ldqsj"/>`,
		"fallback": "uix-sharp:datacenter-security",
	});
}

export default Component;
