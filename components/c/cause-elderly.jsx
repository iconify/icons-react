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
		"content": `<style>.c9n5z1uzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V7a4 4 0 0 0-8 0v2m14 12.25l-2.75-2.75A2 2 0 0 1 18 15.75a2 2 0 0 1 2.75 2.75Z");
}
</style><path class="c9n5z1uzy"/>`,
		"fallback": "uix-sharp:cause-elderly",
	});
}

export default Component;
