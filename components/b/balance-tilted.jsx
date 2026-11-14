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
		"content": `<style>.mt57_-tiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11v9.5m-4 0h8M4 13l16-4M3 9h6M6 9v3.5M15 6h6m-3 0v3.5m-14-5h4V9H4Z");
}
</style><path class="mt57_-tiq"/>`,
		"fallback": "uix-sharp:balance-tilted",
	});
}

export default Component;
