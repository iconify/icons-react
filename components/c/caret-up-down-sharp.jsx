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
		"content": `<style>.lu8a9xbqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 9L12 4.25L16.75 9m-9.5 6L12 19.75L16.75 15");
}
</style><path class="lu8a9xbqu"/>`,
		"fallback": "iconoven:caret-up-down-sharp",
	});
}

export default Component;
