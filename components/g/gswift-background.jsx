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

.i7oghqbjc {
  fill: var(--svg-color--e9e9e9, #e9e9e9);
  d: path("M24 0H0v24h24z");
}

.kavtlccly {
  fill: var(--svg-color--fff, #fff);
  d: path("m20 16.4l-4.5-4.644l2.5-1.357l-3-2.8H9l-3 2.8zm-10.5-8h5l1.752 1.644l-1.752.732l-.9-.776H10l2.2.8h1l2.3 2.424l-7.752-3.18z");
}

.pxwgc7btu {
  fill: var(--svg-color--fff, #fff);
  d: path("m4 16.4l5-5.377l1 .489l-1.5 1.711L11.252 12l1.248.732z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.q0xpwm-ui {
  fill: var(--svg-color--fff, #fff);
  d: path("m15.876 11.572l-.912-.988l-.464.192l-.28-.268l1.28 1.248z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="i7oghqbjc"/><path class="pxwgc7btu"/><path class="kavtlccly"/><path class="q0xpwm-ui"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:gswift-background",
	});
}

export default Component;
