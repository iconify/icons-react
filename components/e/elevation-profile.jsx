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
		"content": `<style>.j10k8ofpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 20l5-9l4 4l4-8l5 13M3 3.5v17m0 0h18");
}
</style><path class="j10k8ofpg"/>`,
		"fallback": "uix-sharp:elevation-profile",
	});
}

export default Component;
