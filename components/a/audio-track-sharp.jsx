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
		"content": `<style>.bdsz7cctn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6h18.5v12H2.75zm3.75 5v2m3-4v6m3-5v4m3-5v6m3-4v2");
}
</style><path class="bdsz7cctn"/>`,
		"fallback": "iconoven:audio-track-sharp",
	});
}

export default Component;
