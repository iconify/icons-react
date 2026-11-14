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
		"content": `<style>.l-9k33bgn {
  d: path("m6.75 7l1.5 1.5l2.75-3m-4.25 6.75l1.5 1.5l2.75-3M7 15.5h3.5V19H7ZM13.5 7H17m-3.5 5.25H17m-3.5 5H17");
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
</style><g class="ulnmmdpxh"><path class="oeucrxbku"/><path class="l-9k33bgn"/></g>`,
		"fallback": "uix-sharp:form-checklist",
	});
}

export default Component;
