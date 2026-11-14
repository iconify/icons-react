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
		"content": `<style>.ihe14lb2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 17a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5 0V3M12 3h9.5M12 7h9.5M12 11h9.5m-4.75 4.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-2 6.25c0-1.5 1.5-2.25 3.5-2.25s3.5.75 3.5 2.25");
}
</style><path class="ihe14lb2a"/>`,
		"fallback": "uix-sharp:collaborative-playlist",
	});
}

export default Component;
