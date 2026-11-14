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
		"content": `<style>.xuh3u-keg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 19.5h.01m-3.546-3.536a5 5 0 0 1 7.072 0M4.929 12.429a10 10 0 0 1 14.142 0M2.358 8.009a15 15 0 0 1 19.284 0");
}
</style><path class="xuh3u-keg"/>`,
		"fallback": "uix-sharp:free-wifi-hotspot",
	});
}

export default Component;
