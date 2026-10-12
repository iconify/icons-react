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
		"content": `<style>.ee0kgch2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13h7.75v8.25H2.75zm10.75 0h7.75v8.25H13.5zM8.125 2.75h7.75V10h-7.75z");
}
</style><path class="ee0kgch2a"/>`,
		"fallback": "iconoven:building-blocks-sharp",
	});
}

export default Component;
