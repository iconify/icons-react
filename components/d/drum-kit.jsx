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
		"content": `<style>.n93pfsudu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0ZM4.102 4.474l6.761-1.812l.971 3.623l-6.762 1.811Zm10.648.776c1-2 5.5-2 6.5 0Zm3.25 0V18m-2 2.5l2-2.5l2 2.5");
}
</style><path class="n93pfsudu"/>`,
		"fallback": "uix-sharp:drum-kit",
	});
}

export default Component;
