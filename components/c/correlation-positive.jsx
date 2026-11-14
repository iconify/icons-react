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
		"content": `<style>.l-7yqxb1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5v17h17M7 17h.01M10 14.5h.01M12.5 12h.01M15 9.5h.01M18 7h.01");
}
</style><path class="l-7yqxb1o"/>`,
		"fallback": "uix-sharp:correlation-positive",
	});
}

export default Component;
