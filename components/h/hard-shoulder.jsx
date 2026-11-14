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
		"content": `<style>.tem8q8-lg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5L8 3m8 18.5L13 3m8.5 18.5L16.5 3m-7 16l.25-4m.25-4l.25-4");
}
</style><path class="tem8q8-lg"/>`,
		"fallback": "uix:hard-shoulder",
	});
}

export default Component;
