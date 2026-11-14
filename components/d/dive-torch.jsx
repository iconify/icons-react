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
		"content": `<style>.szztljbvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5H13v5H2.5Zm10.5 0l3-2v9l-3-2ZM18.5 7L21 5.5M18.5 12h3m-3 5l2.5 1.5");
}
</style><path class="szztljbvw"/>`,
		"fallback": "uix-sharp:dive-torch",
	});
}

export default Component;
