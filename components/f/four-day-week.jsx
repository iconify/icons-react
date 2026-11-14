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
		"content": `<style>.asf-0gpsd {
  d: path("M3.5 4.5h17v17h-17Zm4.5-2v4m8-4v4m-12.5 3h17");
}

.tgfgyvzbz {
  d: path("M13.75 18.5v-6.25l-5 4h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="asf-0gpsd"/><path class="tgfgyvzbz"/></g>`,
		"fallback": "uix-sharp:four-day-week",
	});
}

export default Component;
