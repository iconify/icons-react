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
		"content": `<style>.u92e7kbvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.672 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.558 0 2.982.303 4.161.846M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm11 8.5V21m3.5-5.5V21");
}
</style><path class="u92e7kbvt"/>`,
		"fallback": "uix-sharp:deactivate-account",
	});
}

export default Component;
