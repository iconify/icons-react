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
		"content": `<style>.r447owbod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 16.25v-12M6.75 9.5L12 4.25l5.25 5.25M4.75 20.25h14.5");
}
</style><path class="r447owbod"/>`,
		"fallback": "iconoven:arrow-up-from-dot-sharp",
	});
}

export default Component;
