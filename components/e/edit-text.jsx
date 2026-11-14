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
		"content": `<style>.pz-4s-vyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17m-17 5H14M3.5 15H9m10.182-5.303l2.121 2.121l-6.364 6.364l-2.828.707l.707-2.828Z");
}
</style><path class="pz-4s-vyp"/>`,
		"fallback": "uix-sharp:edit-text",
	});
}

export default Component;
