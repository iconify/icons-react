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
		"content": `<style>.ciehx2bgn {
  d: path("M6.5 12a5.5 7 0 1 0 11 0a5.5 7 0 1 0-11 0Z");
}

.m0s5rob5z {
  d: path("M9.75 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM8.5 17.5c.5-1.75 2-2.75 3.5-2.75s3 1 3.5 2.75");
}

.oeucrxbku {
  d: path("M3.5 2.5h17v19h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oeucrxbku"/><path class="ciehx2bgn"/><path class="m0s5rob5z"/></g>`,
		"fallback": "uix-sharp:ancestor-portrait",
	});
}

export default Component;
