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
		"content": `<style>.p84nvubdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5c1.25 1.75 2.5 3.1 2.5 4.5a2.5 2.5 0 0 1-5 0c0-1.4 1.25-2.75 2.5-4.5ZM3 13.75h18a9 6.75 0 0 1-18 0Z");
}
</style><path class="p84nvubdb"/>`,
		"fallback": "iconoven:diwali-diya-sharp",
	});
}

export default Component;
