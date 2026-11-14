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
		"content": `<style>.j0qit8bpa {
  d: path("M6.75 13.75C4.75 9 4.75 2.5 7.5 2.5S10.75 8 10 12.25m7.25 1.5c2-4.75 2-11.25-.75-11.25S13.25 8 14 12.25");
}

.r-0ii1bwy {
  d: path("M3.5 20.5a8.5 8.5 0 0 1 17 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r-0ii1bwy"/><path class="j0qit8bpa"/></g>`,
		"fallback": "uix-sharp:bunny-ears",
	});
}

export default Component;
