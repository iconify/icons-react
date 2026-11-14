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
		"content": `<style>.otyshbhbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7h12v14.5H6Zm9 0V4.25M12 7v14.5m-3-9v3m5-12.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="otyshbhbc"/>`,
		"fallback": "uix-sharp:cell-site-cabinet",
	});
}

export default Component;
