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
		"content": `<style>.tt1jk4kca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5Q16.5 7 16.5 10a4.5 4.5 0 0 1-9 0q0-3 4.5-7.5Zm-8 18l16-5m-16 0l16 5");
}
</style><path class="tt1jk4kca"/>`,
		"fallback": "uix-sharp:campfire-game",
	});
}

export default Component;
