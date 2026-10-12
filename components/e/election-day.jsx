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
		"content": `<style>.xdpqpc8uh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11.75v7.5a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2v-7.5Zm-2 0h18.5M9.5 16.5h5M9 11.75l1.66-7.82l6.36 1.35l-1.38 6.47");
}
</style><path class="xdpqpc8uh"/>`,
		"fallback": "iconoven:election-day",
	});
}

export default Component;
