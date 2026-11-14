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
		"content": `<style>.rbym95bqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4.5V4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v.5h2a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Zm-.5 5h7m-7 3.5H13m-1 4v4m-4.5 0h9");
}
</style><path class="rbym95bqo"/>`,
		"fallback": "uix-sharp:clipboard-stand",
	});
}

export default Component;
