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
		"content": `<style>.o-474b6sd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5a2.5 7 0 1 0 5 0a2.5 7 0 1 0-5 0Zm14 0a2.5 7 0 1 0 5 0a2.5 7 0 1 0-5 0ZM7.25 7h9.5m-9.5 7h9.5M10.5 7v7m3-7v10q0 3 3 3h.5");
}
</style><path class="o-474b6sd"/>`,
		"fallback": "uix-sharp:fencing-reel",
	});
}

export default Component;
