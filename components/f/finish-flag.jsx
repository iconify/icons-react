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
		"content": `<style>.jw188hb3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75v18.5m18.5-18.5v18.5m-18.5-17h18.5v4H2.75zm6 0v4m6.5-4v4M2.75 13.5H11l1 1.5l1-1.5h8.25");
}
</style><path class="jw188hb3q"/>`,
		"fallback": "iconoven:finish-flag",
	});
}

export default Component;
