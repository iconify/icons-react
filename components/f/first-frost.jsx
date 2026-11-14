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
		"content": `<style>.ftp-xbcmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.344 16.329C10.081 17.713 7.153 18.5 3.5 18.5c0-10 4.5-15 15-15c0 3.289-.674 6.279-2.109 8.709M2.5 19.5L12 10m6 5v6m-2.5-4.5l5 3m-5 0l5-3");
}
</style><path class="ftp-xbcmj"/>`,
		"fallback": "uix-sharp:first-frost",
	});
}

export default Component;
