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
		"content": `<style>.f-13bpbqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19c0 4.5-4.25 7.5-9.5 7.5s-9.5-3-9.5-7.5Zm1 0c0-3.5 2-3.75 2.75-2.75C7 9.25 9 9.5 9 13m-2.75-2.75v-2M15 13c0-3.5 2-3.75 2.75-2.75c.75-1 2.75-.75 2.75 2.75m-2.75-2.75v-2M9 6.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="f-13bpbqg"/>`,
		"fallback": "uix-sharp:fruit-bowl",
	});
}

export default Component;
