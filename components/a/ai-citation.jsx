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
		"content": `<style>.mnp6l122y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 7h-5v5.5h4c0 2.5-1 4-3 5M19.5 7h-5v5.5h4c0 2.5-1 4-3 5");
}
</style><path class="mnp6l122y"/>`,
		"fallback": "uix-sharp:ai-citation",
	});
}

export default Component;
