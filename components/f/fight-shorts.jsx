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
		"content": `<style>.znohgub0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 7.25l-1.5 13h7.5l1.5-7l1.5 7H21l-1.5-13v-3.5h-15Zm0 0h15");
}
</style><path class="znohgub0n"/>`,
		"fallback": "uix-sharp:fight-shorts",
	});
}

export default Component;
