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
		"content": `<style>.zbt0yqurl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18L5 12h14l2.5 6ZM7 12l2.5-6h5l2.5 6Z");
}
</style><path class="zbt0yqurl"/>`,
		"fallback": "uix-sharp:element-antimony",
	});
}

export default Component;
