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
		"content": `<style>.rln_ziztq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V11l5-3v3l5-3v3h2.5V3.5h4V21Zm4-5.5h.01m3.99 0h.01m3.99 0h.01");
}
</style><path class="rln_ziztq"/>`,
		"fallback": "uix:account-industry",
	});
}

export default Component;
