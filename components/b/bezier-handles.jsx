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
		"content": `<style>.d0pc-58cb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5c0-8 4-11.25 7-12m4 0c3 .75 7 4 7 12m-11-16h4v4h-4Zm-4.5 2H10m4 0h4.5m-16 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm16 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="d0pc-58cb"/>`,
		"fallback": "uix-sharp:bezier-handles",
	});
}

export default Component;
