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
		"content": `<style>.a5-3qh79p {
  fill: currentColor;
  d: path("M1.5 20.5v-11h1v2h3v-8h1v2h3v-2h1v2h3v-2h1v2h3v-2h1v8h3v-2h1v11h-8V18q0-1.056-.722-1.778T12 15.5t-1.778.722T9.5 18v2.5zm1-1h6V18q0-1.458 1.021-2.479T12 14.5t2.479 1.021T15.5 18v1.5h6v-7h-4v-6h-11v6h-4zm7-8h1V9.308h-1zm4 0h1V9.308h-1zM12 13");
}
</style><path class="a5-3qh79p"/>`,
		"fallback": "material-symbols-light:castle-outline",
	});
}

export default Component;
