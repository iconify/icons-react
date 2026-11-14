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
		"content": `<style>.e6w58ikuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7H19v10H2.5Zm19 3.5v3M6 10.25v3.5m5.5-4.25V12m0 2.5h.01");
}
</style><path class="e6w58ikuv"/>`,
		"fallback": "uix-sharp:battery-critical",
	});
}

export default Component;
