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
		"content": `<style>.b8-eu1m9o {
  d: path("m3 5.5l9 5.75l9-5.75m-3 9V18m0 3h.01");
}

.h-pbg82vh {
  d: path("M15.2 17H2.5V4h19v13h-.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h-pbg82vh"/><path class="b8-eu1m9o"/></g>`,
		"fallback": "uix-sharp:contact-bounced",
	});
}

export default Component;
