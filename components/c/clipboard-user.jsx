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
		"content": `<style>.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.syvp6jnnb {
  d: path("M8.5 3h7v4.5h-7Zm1.75 8.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM8.5 18c0-1.6 1.5-2.75 3.5-2.75s3.5 1.15 3.5 2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="re3nbbcdl"/><path class="syvp6jnnb"/></g>`,
		"fallback": "uix-sharp:clipboard-user",
	});
}

export default Component;
