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
		"content": `<style>.lyh11m_4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h4.75v3.75H12v3.75h4.75v3.75h4.75M4.75 2.5V7M2.5 4.75L4.75 7L7 4.75");
}
</style><path class="lyh11m_4x"/>`,
		"fallback": "uix:exit-stairs-down",
	});
}

export default Component;
