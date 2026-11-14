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
		"content": `<style>.q__6y6fmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2ZM6.5 18h11v3.5h-11Zm4-11.5h3m-3 3h3m-1.5 5V18");
}
</style><path class="q__6y6fmd"/>`,
		"fallback": "uix-sharp:desk-mic",
	});
}

export default Component;
