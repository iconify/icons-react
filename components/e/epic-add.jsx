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
		"content": `<style>.wcib8fb_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.578 5.46l-4.574 5.59a1.5 1.5 0 0 0 1.161 2.45h1.528a1.5 1.5 0 0 1 1.474 1.776L8.75 17.5a.993.993 0 0 0 1.758.795l4.595-5.871A1.5 1.5 0 0 0 13.921 10H12.33a1.5 1.5 0 0 1-1.471-1.794l.391-1.956a.953.953 0 0 0-1.672-.79M18 15v6m-3-3h6");
}
</style><path class="wcib8fb_t"/>`,
		"fallback": "uix:epic-add",
	});
}

export default Component;
