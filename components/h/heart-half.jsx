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
		"content": `<style>.kj4xsbo1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5C11.1 5 9.5 4 7.75 4C5.1 4 3 6.1 3 8.75C3 14.5 12 20 12 20Zm0 0C12.9 5 14.5 4 16.25 4C18.9 4 21 6.1 21 8.75C21 14.5 12 20 12 20");
}
</style><path class="kj4xsbo1c"/>`,
		"fallback": "uix-sharp:heart-half",
	});
}

export default Component;
