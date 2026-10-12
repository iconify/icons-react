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
		"content": `<style>.ttdzbab0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 7.25h9.5l.556-.003l-.056.553l-.35 2.7H7.1l-.35-2.7l-.056-.553zM7.1 10.5h9.8l-1.05 9.6l-.093 1.154l-1.157-.004H9.4l-1.157.004L8.15 20.1ZM10 2.75c-.6.75.6 1.5 0 2.25m4-2.25c-.6.75.6 1.5 0 2.25");
}
</style><path class="ttdzbab0h"/>`,
		"fallback": "iconoven:chai-cup-sharp",
	});
}

export default Component;
