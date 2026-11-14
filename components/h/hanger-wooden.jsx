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
		"content": `<style>.mjegfpb6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5a2 2 0 1 0-2-2m2 2v2l-7.5 6h15l-7.5-6Zm-7.5 8h15v4h-15Z");
}
</style><path class="mjegfpb6v"/>`,
		"fallback": "uix-sharp:hanger-wooden",
	});
}

export default Component;
