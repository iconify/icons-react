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
		"content": `<style>.obu2fsbpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6l3 6H6Zm3 6v13m-6 0l6-6.5l6 6.5");
}
</style><path class="obu2fsbpw"/>`,
		"fallback": "uix-sharp:floor-lamp-tripod",
	});
}

export default Component;
