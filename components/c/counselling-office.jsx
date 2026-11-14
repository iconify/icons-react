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
		"content": `<style>.ksdkx7bua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.75V6.25a2 2 0 0 1 4 0v6.5h3.75v5Zm4-8h2.75a1 1 0 0 1 1 1v2m-6.75 5v2m5.75-2v2m12.25-2V6.25a2 2 0 0 0-4 0v6.5h-3.75v5Zm-4-8h-2.75a1 1 0 0 0-1 1v2m6.75 5v2m-5.75-2v2");
}
</style><path class="ksdkx7bua"/>`,
		"fallback": "uix-sharp:counselling-office",
	});
}

export default Component;
