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
		"content": `<style>.beaf9ac8r {
  fill: var(--svg-color--fff, #fff);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.i43h7znzb {
  fill: var(--svg-color--86d900, #86d900);
  d: path("M5.504 7.5a1.5 1.5 0 0 1 1.5-1.5h7a3 3 0 1 1 0 6a3 3 0 1 1-3 3v.25a2.75 2.75 0 0 1-5.5 0z");
}

.lnwdnbk2n {
  fill: var(--svg-color--1e1e1e, #1e1e1e);
  d: path("M6.089 4a2.085 2.085 0 0 0-2.085 2.085v11.83c0 1.15.935 2.085 2.085 2.085h9.915a4 4 0 0 0 .59-7.955A4.05 4.05 0 0 0 15.959 4z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="beaf9ac8r"/><path class="lnwdnbk2n"/><path class="i43h7znzb"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:dua-background",
	});
}

export default Component;
