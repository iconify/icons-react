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
		"content": `<style>.j8yvybb9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6.5h7a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Zm3.5 0V3M6 3h4m8.5 10.5c.5 1.5 3 2.5 3 5a3 3 0 0 1-6 0c0-1.5 1-2.25 1.5-3c.25 1 .75 1.5 1.25 1.5c.5-1 .5-2.25.25-3.5Z");
}
</style><path class="j8yvybb9g"/>`,
		"fallback": "uix-sharp:cng-fuel",
	});
}

export default Component;
