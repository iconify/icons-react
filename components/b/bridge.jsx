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
		"content": `<style>.l5f84fo4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3.75v11.5m10.5-11.5v11.5m-14.5 0h18.5M2.75 11l4-6.25q5.25 8.25 10.5 0l4 6.25");
}
</style><path class="l5f84fo4o"/>`,
		"fallback": "iconoven:bridge",
	});
}

export default Component;
