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
		"content": `<style>.inq5kpb7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 4L4 20M4 4l16 16M6 15l3 3m6 0l3-3");
}
</style><path class="inq5kpb7p"/>`,
		"fallback": "uix-sharp:bokken-pair",
	});
}

export default Component;
