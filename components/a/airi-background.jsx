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

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xtzhgdcqq {
  fill: var(--svg-color--fff, #fff);
  d: path("M5.953 12.941a6.13 6.13 0 0 0 5.106 5.115V20A8.056 8.056 0 0 1 4 12.941zm5.106-6.997a6.13 6.13 0 0 0-5.106 5.115H4A8.056 8.056 0 0 1 11.059 4zm6.988 5.115a6.12 6.12 0 0 0-5.106-5.115V4A8.056 8.056 0 0 1 20 11.059zm-5.106 6.998a6.13 6.13 0 0 0 5.106-5.116H20A8.056 8.056 0 0 1 12.941 20zm-2.362-3.233H7.722L9.152 12h2.679l-1.247-2.179L12 7.294l4.282 7.53h-2.837l-1.525-2.66z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="xtzhgdcqq"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:airi-background",
	});
}

export default Component;
