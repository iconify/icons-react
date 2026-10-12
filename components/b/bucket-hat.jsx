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
		"content": `<style>.b823kwb3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4.75h6q1.5 0 1.71 1.48l.58 4.04q.21 1.48-1.29 1.48H8q-1.5 0-1.29-1.48l.58-4.04Q7.5 4.75 9 4.75m-1.9 4.5h9.8m-9.9 5h10q1.25 0 1.77 1.13l1.96 4.24q.52 1.13-.73 1.13H4q-1.25 0-.73-1.13l1.96-4.24q.52-1.13 1.77-1.13M5 17.5h14");
}
</style><path class="b823kwb3w"/>`,
		"fallback": "iconoven:bucket-hat",
	});
}

export default Component;
