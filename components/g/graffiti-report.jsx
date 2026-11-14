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
		"content": `<style>.ic-4m1bju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3H8l3.5 3.5V19a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm1 8h3m-3 4h3m6-2.5A1.5 1.5 0 0 1 16 11h.5V8.5h2V11h.5a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5ZM14 5h.01m3.49-1.75h.01M21 5h.01");
}
</style><path class="ic-4m1bju"/>`,
		"fallback": "uix-sharp:graffiti-report",
	});
}

export default Component;
