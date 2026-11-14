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
		"content": `<style>.z34cdo5zz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12c2.5-4 5.5-5.5 8-5.5c3.5 0 6 2.5 7 5.5c-1 3-3.5 5.5-7 5.5c-2.5 0-5.5-1.5-8-5.5m-1.237-1.237L4.5 10a1.172 1.172 0 0 0-2 .828v2.344a1.172 1.172 0 0 0 2 .828l.763-.763a1.75 1.75 0 0 0 0-2.474M17 10.5h.01");
}
</style><path class="z34cdo5zz"/>`,
		"fallback": "uix:fish",
	});
}

export default Component;
