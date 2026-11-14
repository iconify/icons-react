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
		"content": `<style>.jki_chtmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.5 4.75h5v9h-5ZM12 6.5v2.75m0 9v3.25m-4.5 0h9M9.5 11L5 14.5m9.5-3.5l4.5 3.5");
}
</style><path class="jki_chtmd"/>`,
		"fallback": "uix-sharp:grappling-dummy",
	});
}

export default Component;
