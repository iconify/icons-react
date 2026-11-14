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
		"content": `<style>.htltl42id {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4H4v16h2M18 4h2v16h-2M9 9v6m3-8.5v11m3-7.5v4");
}
</style><path class="htltl42id"/>`,
		"fallback": "uix-sharp:audio-sample",
	});
}

export default Component;
