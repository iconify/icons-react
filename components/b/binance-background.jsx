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

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.pqhogu37l {
  fill: var(--svg-color--f0b90b, #f0b90b);
  d: path("M7.616 12L5.81 13.805L4.002 12l1.805-1.805zm4.386-4.386l3.096 3.095l1.804-1.804L12.002 4L7.098 8.905l1.804 1.804zm6.191 2.581L16.39 12l1.804 1.805L19.998 12zm-6.19 6.191l-3.096-3.095l-1.805 1.804l4.9 4.905l4.9-4.905l-1.804-1.804zm0-2.581L13.806 12l-1.805-1.805L10.193 12z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="pqhogu37l"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:binance-background",
	});
}

export default Component;
