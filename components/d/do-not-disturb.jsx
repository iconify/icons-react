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
		"content": `<style>.mvmzt1bsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.25 12A6.5 6.5 0 1 1 8.5 4.25A5 5 0 0 0 16.25 12ZM15 18h6");
}
</style><path class="mvmzt1bsv"/>`,
		"fallback": "uix-sharp:do-not-disturb",
	});
}

export default Component;
