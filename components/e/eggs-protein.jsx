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
		"content": `<style>.osgln70op {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.198 19.754c-.71.475-1.454.746-2.198.746c-3.5 0-7-6-7-11c0-4 3-7 7-7s7 3 7 7c0 1.198-.201 2.454-.555 3.671M15 16h2.25v5.5H15Zm4.75 0H22v5.5h-2.25Zm-2.5 2.75h2.5");
}
</style><path class="osgln70op"/>`,
		"fallback": "uix-sharp:eggs-protein",
	});
}

export default Component;
