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
		"content": `<style>.iow279dbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM2.5 21c0-3.75 2.25-6 5-6s5 2.25 5 6M14 7.25h2L21.5 4v10L16 10.75h-2Z");
}
</style><path class="iow279dbt"/>`,
		"fallback": "uix-sharp:devrel",
	});
}

export default Component;
