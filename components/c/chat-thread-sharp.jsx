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
		"content": `<style>.u81nocbro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75v-2.5h13.5v8.5H2.75v-2.5Zm3.5 1.75h6.5M6.5 11.75v5.75h2.75m0-3.25h12v6.5h-12z");
}
</style><path class="u81nocbro"/>`,
		"fallback": "iconoven:chat-thread-sharp",
	});
}

export default Component;
