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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.napp-hbwy {
  fill: var(--svg-color--ff1381, #ff1381);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.z6t996b9u {
  fill: var(--svg-color--fff, #fff);
  d: path("m8.889 12l-3.556 2.223V9.778zm1.031-1.333l2.747-2.036l2.747 2.036l3.253-2.334l-6-4.333l-6 4.333zm0 2.666l2.747 2.036l2.747-2.036l3.253 2.334l-6 4.333l-6-4.333z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="napp-hbwy"/><path class="z6t996b9u"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:cuminu-background",
	});
}

export default Component;
