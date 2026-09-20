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

.g2__8obzq {
  fill: var(--svg-color--1b14dc, #1b14dc);
  d: path("M24 0H0v24h24z");
}

.jgjv8xbhj {
  fill: var(--svg-color--fff, #fff);
  d: path("M11.556 17.333V4L6.222 7.156v10.177zm6.222-10.666h-5.334V20l5.334-3.155z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="g2__8obzq"/><path class="jgjv8xbhj"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:idle-background",
	});
}

export default Component;
