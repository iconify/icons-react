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
		"content": `<style>.ik9s410ka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h16v6.5h-16Zm7.9 15.75H2.5v-6.5h12.4m-8.9-6h.01M6 15.5h.01m8.49 2.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3.25-4.5v2.25m0 4.5v2m-4.5-4.25h2.25m4.5 0h2");
}
</style><path class="ik9s410ka"/>`,
		"fallback": "uix-sharp:attack-surface",
	});
}

export default Component;
