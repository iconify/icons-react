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
		"content": `<style>.cnhopdbfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17a9.5 4 0 1 0 19 0a9.5 4 0 1 0-19 0Zm4.75-6.75c-1-1.5-1-2.5 0-3.75s1-2.5 0-4M12 10.25c-1-1.5-1-2.5 0-3.75s1-2.5 0-4m4.75 7.75c-1-1.5-1-2.5 0-3.75s1-2.5 0-4");
}
</style><path class="cnhopdbfb"/>`,
		"fallback": "uix-sharp:hot-spring",
	});
}

export default Component;
