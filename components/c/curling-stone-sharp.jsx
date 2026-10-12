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
		"content": `<style>.k0qvw6fjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.5h18.5v9.25H2.75zm0 4.75h18.5M8.5 11.5V7.25H19");
}
</style><path class="k0qvw6fjj"/>`,
		"fallback": "iconoven:curling-stone-sharp",
	});
}

export default Component;
