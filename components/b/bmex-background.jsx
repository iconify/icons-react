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
		"content": `<style>.ar1v0rbpv {
  fill: var(--svg-color--fff, #fff);
  d: path("M7.5 5.5L4 18.5h3l2-8h3.235l1.265-5zm9.335 13L20 5.5h-3l-2 8h-3l-1.5 5z");
}

.cnqpokr8f {
  stop-color: var(--svg-color--b42600, #b42600);
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.r4i437pya {
  d: path("M24 0H0v24h24z");
}

.vqi-c0hjz {
  stop-color: var(--svg-color--fb2f03, #fb2f03);
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path fill="url(#SVG72AR4dwK)" class="r4i437pya"/><path class="ar1v0rbpv"/></g><defs><linearGradient id="SVG72AR4dwK" x1="14.669" x2="14.669" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop class="vqi-c0hjz"/><stop offset="1" class="cnqpokr8f"/></linearGradient><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:bmex-background",
	});
}

export default Component;
