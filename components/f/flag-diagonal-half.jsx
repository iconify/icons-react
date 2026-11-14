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
		"content": `<style>.ffwl019_e {
  d: path("M5 2.5v19m0-18h14v10H5Z");
}

.gaaogwstd {
  fill: currentColor;
  d: path("M5 3.5h14l-14 10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ffwl019_e"/><path class="gaaogwstd"/></g>`,
		"fallback": "uix-sharp:flag-diagonal-half",
	});
}

export default Component;
