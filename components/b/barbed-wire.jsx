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
		"content": `<style>.uxay34iau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7h18.5M2.75 17h18.5M4.5 5l4 4m0-4l-4 4m9-4l4 4m0-4l-4 4m-5 6l4 4m0-4l-4 4m7-4l4 4m0-4l-4 4");
}
</style><path class="uxay34iau"/>`,
		"fallback": "iconoven:barbed-wire",
	});
}

export default Component;
