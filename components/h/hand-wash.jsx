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
		"content": `<style>.p8gafh5ks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5h10c1.5 0 3-.5 4-1.5l3.75-3.75c.75-.75.5-2-.5-2.25c-.75-.25-1.5.25-2 .75L16.5 16.5H11M2.5 6h7C11 6 12 7 12 8.5v1M6.25 6V3.5m-2 0h4M12 12v1.5m-9 3h3");
}
</style><path class="p8gafh5ks"/>`,
		"fallback": "uix-sharp:hand-wash",
	});
}

export default Component;
