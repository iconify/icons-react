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
		"content": `<style>.ixv163bsh {
  d: path("M10 21v-4h4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.us8_9rb8k {
  d: path("M6 3h12v18H6Zm3.5 4.5h1m3 0h1m-5 4h1m3 0h1");
}
</style><g class="ulnmmdpxh"><path class="us8_9rb8k"/><path class="ixv163bsh"/></g>`,
		"fallback": "uix-sharp:apartment",
	});
}

export default Component;
