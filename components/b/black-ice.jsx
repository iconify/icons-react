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
		"content": `<style>.uqwlqcbmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5L9.5 4m8.227 8.688L14.5 4M12 8.5v6m6.5 1v6M16 17l5 3m-5 0l5-3");
}
</style><path class="uqwlqcbmz"/>`,
		"fallback": "uix-sharp:black-ice",
	});
}

export default Component;
