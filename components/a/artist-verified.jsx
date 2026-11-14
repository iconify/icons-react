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
		"content": `<style>.faipdqbsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM3.5 21c0-4 3.5-6 7.5-6c.913 0 1.775.104 2.56.289M14.75 18l2 2L21 15.75");
}
</style><path class="faipdqbsi"/>`,
		"fallback": "uix-sharp:artist-verified",
	});
}

export default Component;
