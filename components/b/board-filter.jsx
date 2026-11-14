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
		"content": `<style>.jqaxxebse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3h4v17h-4Zm6.75 9.2V3h4v9.2M16.25 3h4v7h-4Zm-1.5 12h6.5l-2.5 3v3.25l-1.5-.75V18Z");
}
</style><path class="jqaxxebse"/>`,
		"fallback": "uix-sharp:board-filter",
	});
}

export default Component;
