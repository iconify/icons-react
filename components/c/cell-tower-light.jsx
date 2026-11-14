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
		"content": `<style>.uhtzlnhek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 21.5l4-13l4 13M10 15h4M12 5h.01M8.5 2.5a3.5 3.5 0 0 0 0 5m7-5a3.5 3.5 0 0 1 0 5");
}
</style><path class="uhtzlnhek"/>`,
		"fallback": "uix-sharp:cell-tower-light",
	});
}

export default Component;
