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
		"content": `<style>.v2c-rvo8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4.5H7.25a4.5 4.5 0 0 0 0 9H9m2-9h1.75a4.5 4.5 0 0 1 0 9H11M8.5 9h3m6.5 6v6.25m-3.125-3.125h6.25");
}
</style><path class="v2c-rvo8d"/>`,
		"fallback": "iconoven:insert-link",
	});
}

export default Component;
