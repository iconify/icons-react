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
		"content": `<style>.jhj0jjhyx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h12v8H3ZM15 6l5.5-2v7L15 9Zm-6 5.5v3m0 0l-4 6m4-6l4 6");
}
</style><path class="jhj0jjhyx"/>`,
		"fallback": "uix-sharp:conference-camera",
	});
}

export default Component;
