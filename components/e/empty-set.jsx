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
		"content": `<style>.l-e1bjfwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5a7 7 0 1 1 0 14a7 7 0 1 1 0-14m6.25-1.5l-12.5 17");
}
</style><path class="l-e1bjfwb"/>`,
		"fallback": "iconoven:empty-set",
	});
}

export default Component;
