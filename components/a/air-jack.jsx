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
		"content": `<style>.rzema3bvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4h8m-4 0l7 8l-7 8l-7-8ZM5 20h14M2.5 12h19");
}
</style><path class="rzema3bvy"/>`,
		"fallback": "uix-sharp:air-jack",
	});
}

export default Component;
