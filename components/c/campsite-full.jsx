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
		"content": `<style>.l4cyg2bke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.5L12 2.75m3.298 10.441L9 2.75M2.5 18.5h9.9m-4.15 0l2.25-5l2.018 4.484m2.732.516a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm1-2.25l4.5 4.5");
}
</style><path class="l4cyg2bke"/>`,
		"fallback": "uix-sharp:campsite-full",
	});
}

export default Component;
