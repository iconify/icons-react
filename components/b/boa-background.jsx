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

.kkbp_kn-h {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M4 8.5h16V11h-1l.25 8H20v1H4v-1h.75L5 11H4zM8 11h2.5l-.33 8H8.295zm5.5 0H16l-.33 8h-1.875z");
}

.ks-c2n5ey {
  fill: var(--svg-color--fff, #fff);
  d: path("M6 7.5L11.98 4L18 7.5z");
}

.ply2390pz {
  fill: var(--svg-color--004f9e, #004f9e);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ply2390pz"/><path clip-rule="evenodd" class="kkbp_kn-h"/><path class="ks-c2n5ey"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:boa-background",
	});
}

export default Component;
