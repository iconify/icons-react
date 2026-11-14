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
		"content": `<style>.h0b_8bcdp {
  d: path("M3.5 13L12 8l8.5 5v8h-17ZM12 8V2.5m0 0l5 1.75L12 6Z");
}

.ixv163bsh {
  d: path("M10 21v-4h4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h0b_8bcdp"/><path class="ixv163bsh"/></g>`,
		"fallback": "uix-sharp:golf-clubhouse",
	});
}

export default Component;
