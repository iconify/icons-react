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
		"content": `<style>.as1ud6bid {
  d: path("M9.75 12v5.5h2a2.75 2.75 0 0 0 0-5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z17na7seo {
  d: path("M6.5 5h11v16.5h-11ZM10 2.5h4");
}
</style><g class="ulnmmdpxh"><path class="z17na7seo"/><path class="as1ud6bid"/></g>`,
		"fallback": "uix-sharp:battery-d-cell",
	});
}

export default Component;
