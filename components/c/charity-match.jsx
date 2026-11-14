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
		"content": `<style>.v1fyuab2h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.511 20.161L12 20.5c-3-2-9.5-6-9.5-11.75c0-3 2.25-5.25 5.25-5.25C9.5 3.5 11 4.5 12 6c1-1.5 2.5-2.5 4.25-2.5c3 0 5.25 2.25 5.25 5.25c0 1.84-.665 3.5-1.668 4.973M15.25 16.5h5.5m-5.5 3h5.5");
}
</style><path class="v1fyuab2h"/>`,
		"fallback": "uix:charity-match",
	});
}

export default Component;
