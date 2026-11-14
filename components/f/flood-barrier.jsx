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
		"content": `<style>.lbbgdgb6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 2.5h1a1.75 1.75 0 0 1 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 10 19.75V4.25a1.75 1.75 0 0 1 1.75-1.75m-9.25 10q2-1.5 3.75 0t3.75 0M2.5 17q2-1.5 3.75 0T10 17m4.5 2q1.75-1.5 3.5 0t3.5 0");
}
</style><path class="lbbgdgb6e"/>`,
		"fallback": "uix:flood-barrier",
	});
}

export default Component;
