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
		"content": `<style>.akhc4dbhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4v4.5m-3 0h6v7h-6Zm3 7V20m9-16v2.5m-3 0h6v6h-6Zm3 6V17m-12-5h6m3-2h6");
}
</style><path class="akhc4dbhc"/>`,
		"fallback": "uix-sharp:chart-box-plot",
	});
}

export default Component;
