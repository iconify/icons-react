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
		"content": `<style>.l90uufwds {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h8v18.5H3Zm5.25 9.25h.01M15.25 4H20a1.5 1.5 0 0 1 1.5 1.5V11a1.5 1.5 0 0 1-1.5 1.5h-3.5L13.75 15V5.5a1.5 1.5 0 0 1 1.5-1.5Z");
}
</style><path class="l90uufwds"/>`,
		"fallback": "uix-sharp:exit-interview",
	});
}

export default Component;
