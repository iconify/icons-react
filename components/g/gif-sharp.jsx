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
		"content": `<style>.mdz6hnazb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 8H5c-1 0-2 1-2 2v4c0 1 1 2 2 2h3v-4H6m6-4v8m9-8h-5v8m0-4h4");
}
</style><path class="mdz6hnazb"/>`,
		"fallback": "coolicons:gif-sharp",
	});
}

export default Component;
