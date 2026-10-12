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
		"content": `<style>.ns1gi2d2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.75v13.5M12 7.75v13.5m4.5-13.5v13.5M6.75 4.75h3.5m3.5 0h3.5");
}
</style><path class="ns1gi2d2m"/>`,
		"fallback": "iconoven:cricket-wicket",
	});
}

export default Component;
