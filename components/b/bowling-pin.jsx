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
		"content": `<style>.fz7jixuzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 21.5h4.5c2.25-3.5 2.5-7.5-.25-11c-.75-1 1-2 1-5a3 3 0 0 0-6 0c0 3 1.75 4 1 5c-2.75 3.5-2.5 7.5-.25 11Zm.25-11h4");
}
</style><path class="fz7jixuzq"/>`,
		"fallback": "uix-sharp:bowling-pin",
	});
}

export default Component;
