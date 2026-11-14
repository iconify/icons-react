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
		"content": `<style>.rv-0ncbfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M3 20v-6l2-3l2 3v6m3 0V7l2-3.5L14 7v13m3 0v-8.5l2-3l2 3V20");
}
</style><path class="rv-0ncbfs"/>`,
		"fallback": "uix-sharp:crystallisation",
	});
}

export default Component;
