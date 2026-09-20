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

.iyq8d3b6n {
  fill: var(--svg-color--fff, #fff);
  d: path("M19.998 6.713V4.5H4v2.213h7.12A15 15 0 0 0 7.56 9.79H4v2.213h2.005A14.96 14.96 0 0 0 4 19.5h2.198c0-2.801.901-5.393 2.424-7.5h4.156a9.73 9.73 0 0 0-3.525 7.5h2.198c0-4.137 3.343-7.5 7.45-7.5H20V9.787h-9.346A12.6 12.6 0 0 1 18.9 6.71H20z");
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="iyq8d3b6n"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:fluent-background",
	});
}

export default Component;
