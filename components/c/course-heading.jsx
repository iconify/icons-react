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
		"content": `<style>.j3vdgwz6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c2.5 1.5 3.5 4 3.5 6.5v3h-7v-3c0-2.5 1-5 3.5-6.5Zm0-2.75v-6.5M8.75 6L12 2.75L15.25 6");
}
</style><path class="j3vdgwz6a"/>`,
		"fallback": "uix-sharp:course-heading",
	});
}

export default Component;
