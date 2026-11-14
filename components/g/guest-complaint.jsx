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
		"content": `<style>.zr605xbil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v8.5A2.5 2.5 0 0 1 18 17H8.5l-5 4Zm8.5.5v4m0 3h.01");
}
</style><path class="zr605xbil"/>`,
		"fallback": "uix-sharp:guest-complaint",
	});
}

export default Component;
