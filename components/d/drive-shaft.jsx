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
		"content": `<style>.sd91p9bku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h2v8h-2Zm2 1.5h2a2.5 2.5 0 0 1 0 5h-2M9 12h6m4.5-2.5h-2a2.5 2.5 0 0 0 0 5h2m0-6.5h2v8h-2Z");
}
</style><path class="sd91p9bku"/>`,
		"fallback": "uix-sharp:drive-shaft",
	});
}

export default Component;
