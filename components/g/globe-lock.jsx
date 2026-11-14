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
		"content": `<style>.cixtq3bkg {
  d: path("M8 12c0-3.8 1.8-7.2 4-9.5c2.2 2.3 4 5.7 4 9.5m-1 5h6v4.5h-6Zm1.25 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}

.o3qmgs4om {
  d: path("M21.5 12h-7.25a2 2 0 0 0-2 2v7.5A9.5 9.5 0 1 1 21.5 12Zm-19 0h9.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o3qmgs4om"/><path class="cixtq3bkg"/></g>`,
		"fallback": "uix-sharp:globe-lock",
	});
}

export default Component;
