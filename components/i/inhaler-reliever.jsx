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
		"content": `<style>.jqf0ekbzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.5h4.5v7h-4.5Zm-1.25 7h7V15h5v6h-12Zm15 7l3-1.5m-3 4.5l3 1.5");
}
</style><path class="jqf0ekbzv"/>`,
		"fallback": "uix-sharp:inhaler-reliever",
	});
}

export default Component;
