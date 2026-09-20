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

.knm9h-b0f {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 20L19.322 7.24a1.822 1.822 0 1 0-2.563-2.562zm7.393-13.59L4.94 11.25l4.84-6.453a1.15 1.15 0 1 1 1.612 1.612m7.81 7.809l-6.454 4.841l4.842-6.453a1.151 1.151 0 1 1 1.612 1.612");
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="knm9h-b0f"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:gal-background",
	});
}

export default Component;
