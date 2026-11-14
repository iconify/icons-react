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
		"content": `<style>.e9ntq2bpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 13.5V7H6.5L12 3l5.5 4H16v6.5Zm-5 3h18L19.5 21h-15Zm6.5-3v3m5-3v3");
}
</style><path class="e9ntq2bpz"/>`,
		"fallback": "uix-sharp:chicken-feeder",
	});
}

export default Component;
