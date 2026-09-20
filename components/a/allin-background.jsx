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
		"content": `<style>.dulhtdwcr {
  fill: var(--svg-color--77ebef, #77ebef);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.q164fcb3f {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M4 19h3.955l.58-2h4.93l.58 2H18L13.225 5h-4.45zm8.5-5L11 8.955L9.5 14z");
}

.xfnalcb_e {
  fill: var(--svg-color--fff, #fff);
  d: path("M16.5 5H20v14h-3.5z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="dulhtdwcr"/><path clip-rule="evenodd" class="q164fcb3f"/><path class="xfnalcb_e"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:allin-background",
	});
}

export default Component;
