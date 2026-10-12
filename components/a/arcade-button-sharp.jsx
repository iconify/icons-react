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
		"content": `<style>.ap61d_3ls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 13.5h17.5v7.25H3.25zm3 0v-3.25a5.75 2.75 0 0 1 11.5 0v3.25ZM12 2.75v2m-5.25-1l1 1.5m9.5-1.5l-1 1.5");
}
</style><path class="ap61d_3ls"/>`,
		"fallback": "iconoven:arcade-button-sharp",
	});
}

export default Component;
