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

.gw2nugb7k {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M7.555 5.348a8 8 0 1 1 8.89 13.304a8 8 0 0 1-8.89-13.304m6.681 10.112h1.016V8.456h-1.016v2.108H9.764V8.456H8.748v7.004h1.016V13.3h4.472z");
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.u1p47zbmz {
  fill: var(--svg-color--fff, #fff);
  d: path("M14.283 12.492H9.812v-1.116h4.471z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="u1p47zbmz"/><path clip-rule="evenodd" class="gw2nugb7k"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:hedera-hashgraph-background",
	});
}

export default Component;
