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
		"content": `<style>.jcpdukvvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 17v-1.5a5.5 5.5 0 0 1 11 0V17M2 17h14.25M9 10v3m11.552-9.638za1.5 1.5 0 0 1 .897 1.922l-2.594 7.128a1.5 1.5 0 0 1-.465.652l-.81.656a.875.875 0 0 1-1.409-.513l-.199-1.023a1.5 1.5 0 0 1 .063-.799l2.595-7.127a1.5 1.5 0 0 1 1.922-.896M14.75 20.5h6.75");
}
</style><path class="jcpdukvvl"/>`,
		"fallback": "uix:contractor-hire",
	});
}

export default Component;
