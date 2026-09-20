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
		"content": `<style>.f-sxcm-bt {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M12 20a7.998 7.998 0 0 0 7.391-11.061A7.999 7.999 0 0 0 4 12a8 8 0 0 0 8 8m0-.421a7.579 7.579 0 1 0 0-15.157a7.579 7.579 0 0 0 0 15.157m-3.79-4.77c3.508 1.288 6.796.534 8 0v.437c-3.103 1.242-6.627.518-8 0zm3.37-6.599v4.42l.08.11l1.528 2.198v.008c1.083-.042 2.468-.43 3.024-.619v-.374zm2.947 3.04l1.685 2.012v-4.63zm-4.265.172L8.679 14.34c1.217.48 3.217.648 4.164.606l-2.58-3.52z");
}

.fd0q0mbrw {
  fill: var(--svg-color--fff, #fff);
  d: path("m10.315 10.872l1.264-2.661l4.631 5.743v.379a12 12 0 0 1-2.951.598zm-2.105 3.25c.135.08.295.152.463.22l1.588-2.918l-2.05-2.792z");
}

.ft5dv1b6b {
  fill: none;
}

.ig-7ss2at {
  fill: var(--svg-color--d7a049, #d7a049);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ig-7ss2at"/><path class="fd0q0mbrw"/><path clip-rule="evenodd" class="f-sxcm-bt"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:cws-background",
	});
}

export default Component;
