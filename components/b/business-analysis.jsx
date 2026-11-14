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
		"content": `<style>.d449ghbvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-13-3V14m4.5 3.5V12m4.5 5.5v-7M7 10l11.5-6M15 3.25l3.5.75l-.75 3");
}
</style><path class="d449ghbvi"/>`,
		"fallback": "uix-sharp:business-analysis",
	});
}

export default Component;
