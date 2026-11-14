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
		"content": `<style>.hf_4bdbxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 5h.75A2.625 2.625 0 0 1 8.5 7.625v8.75A2.625 2.625 0 0 1 5.875 19h-.75A2.625 2.625 0 0 1 2.5 16.375v-8.75A2.625 2.625 0 0 1 5.125 5m13 0h.75A2.625 2.625 0 0 1 21.5 7.625v8.75A2.625 2.625 0 0 1 18.875 19h-.75a2.625 2.625 0 0 1-2.625-2.625v-8.75A2.625 2.625 0 0 1 18.125 5M8.5 8l1.75-1.5L12 8l1.75-1.5L15.5 8m-7 8l1.75 1.5L12 16l1.75 1.5L15.5 16");
}
</style><path class="hf_4bdbxb"/>`,
		"fallback": "uix:gangway-connection",
	});
}

export default Component;
