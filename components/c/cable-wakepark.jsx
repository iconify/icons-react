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
		"content": `<style>.b_4quj_ox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 4l19 5M9.75 8.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM12 11v4.5m-3 0h6M2.5 20q2.375-1.5 4.75 0T12 20t4.75 0t4.75 0");
}
</style><path class="b_4quj_ox"/>`,
		"fallback": "uix-sharp:cable-wakepark",
	});
}

export default Component;
