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
		"content": `<style>.fddcqdb7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8C3.5 14 9 19.5 15 19.5ZM7 16v5.5m-3 0h6m-.75-7.75l3.25-3.25m.906-3.381a3.5 3.5 0 0 1 2.475 2.475m-2.165-5.988a7 7 0 0 1 5.678 5.678");
}
</style><path class="fddcqdb7n"/>`,
		"fallback": "uix-sharp:deep-space-network",
	});
}

export default Component;
