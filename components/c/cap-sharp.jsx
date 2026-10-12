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
		"content": `<style>.dys4ds_xw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 14.75V13a7 7 0 0 1 14 0v1.75Zm7-7.25v7m-7 4v-1.25h17.5v3.5H3.75V19.5Z");
}
</style><path class="dys4ds_xw"/>`,
		"fallback": "iconoven:cap-sharp",
	});
}

export default Component;
