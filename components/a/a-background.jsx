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
		"content": `<style>.c0o5rt2ke {
  fill: var(--svg-color--2e3bff, #2e3bff);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.gpylaz2xp {
  fill: var(--svg-color--fff, #fff);
  d: path("M14.648 10.282h-2.17a.32.32 0 0 0-.227.094L7.253 15.38H4v-4.82l1.935-1.94v5.371h.276l5.05-5.055c.202-.202.476-.315.762-.315h2.625zM20 8.622h-3.253l-4.998 5.002a.32.32 0 0 1-.227.094h-2.17v1.66h2.623c.287 0 .563-.114.765-.317l5.048-5.053h.277v4.538h-3.118v.833h3.118l.287-.288l.268-.268L20 13.44z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="c0o5rt2ke"/><path class="gpylaz2xp"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:a-background",
	});
}

export default Component;
