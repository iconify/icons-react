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
		"content": `<style>.fu8rtizmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h12.5v19H3Zm3 4h6.5m-6.5 4h6.5M6 14h3.5M6 17.5h5m1.5-3.5h9m-3-3l3 3l-3 3");
}
</style><path class="fu8rtizmn"/>`,
		"fallback": "uix-sharp:handout",
	});
}

export default Component;
