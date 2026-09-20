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

.jlaljjshw {
  fill: var(--svg-color--fff, #fff);
  d: path("m7.18 11.167l4.867-1.987l4.706 2.04L12.033 4zm.013 2.206l4.854 2.734L17 13.373L12.093 20zm4.867-3.22l4.927 2.127l-4.927 2.667L7 12.22l5.067-2.067z");
}

.k0qq9crjv {
  fill: var(--svg-color--01c853, #01c853);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="k0qq9crjv"/><path class="jlaljjshw"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:etc-background",
	});
}

export default Component;
