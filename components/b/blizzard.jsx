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
		"content": `<style>.ls_wayrwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 3v14M8 6.5l12 7m-12 0l12-7M2.5 10H5m-2.5 7.5H10M6 21h11");
}
</style><path class="ls_wayrwk"/>`,
		"fallback": "uix:blizzard",
	});
}

export default Component;
