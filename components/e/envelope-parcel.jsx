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
		"content": `<style>.jy1s42bgb {
  d: path("M3.5 6h17v12h-17Z");
}

.tvgwi4boa {
  d: path("m3.5 8l8.5 6l8.5-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jy1s42bgb"/><path class="tvgwi4boa"/></g>`,
		"fallback": "uix-sharp:envelope-parcel",
	});
}

export default Component;
