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
		"content": `<style>.g7auo5bya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 8.75v-6h4.5v6m-8.5 0h12.5v10.5H5.75zm0 4.75h12.5m-9.5 5.75v2m6.5-2v2");
}
</style><path class="g7auo5bya"/>`,
		"fallback": "iconoven:carry-on-sharp",
	});
}

export default Component;
