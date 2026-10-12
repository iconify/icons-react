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
		"content": `<style>.a4azcdb1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11.25h11v10h-11zm11 2h3.75v5.5h-3.75M4.75 8.5V7.25l-.014-2.778L7.5 4.75A3.25 3.25 0 0 1 13 4.5h2.75v4Zm3.5 5.75v4m4-4v4");
}
</style><path class="a4azcdb1i"/>`,
		"fallback": "iconoven:beer-sharp",
	});
}

export default Component;
