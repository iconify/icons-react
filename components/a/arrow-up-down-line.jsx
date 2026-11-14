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
		"content": `<style>.fju_hzbne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14m-7 3v16m-5-11l5-5l5 5m-10 6l5 5l5-5");
}
</style><path class="fju_hzbne"/>`,
		"fallback": "uix-sharp:arrow-up-down-line",
	});
}

export default Component;
