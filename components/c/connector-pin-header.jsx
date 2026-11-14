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
		"content": `<style>.kv2ow5bvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10h18v4H3Zm3-6v16m4-16v16m4-16v16m4-16v16");
}
</style><path class="kv2ow5bvh"/>`,
		"fallback": "uix-sharp:connector-pin-header",
	});
}

export default Component;
