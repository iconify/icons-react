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
		"content": `<style>.beo5g3kfh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4v3.5l2.75 3.5l.75.9v10.6h-11v-10.6l.75-.9L10 6.25Zm0 2.5h4m-2 7v5.5m-2-3.5h4");
}
</style><path class="beo5g3kfh"/>`,
		"fallback": "iconoven:holy-water-sharp",
	});
}

export default Component;
