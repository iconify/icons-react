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
		"content": `<style>.sroe3rezh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 2.75l5.35 14.35l.431 1.373l1.439.027h6.53m-18-1.75H10v3.75H3.25z");
}
</style><path class="sroe3rezh"/>`,
		"fallback": "iconoven:hockey-sharp",
	});
}

export default Component;
