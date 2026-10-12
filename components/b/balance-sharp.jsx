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
		"content": `<style>.xlt9rqi5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25v17m-4 0h8M5.75 6.5h12.5m-15 7l2.5-7l2.5 7m7.5 0l2.5-7l2.5 7m-18 .75h6a3 3 0 0 1-6 0Zm12.5 0h6a3 3 0 0 1-6 0Z");
}
</style><path class="xlt9rqi5h"/>`,
		"fallback": "iconoven:balance-sharp",
	});
}

export default Component;
