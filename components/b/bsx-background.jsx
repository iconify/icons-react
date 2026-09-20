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

.k3tlb5beb {
  fill: var(--svg-color--4effaf, #4effaf);
  d: path("M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-2.5-8c0-1.43.345-4.39 2.5-7c2.155 2.61 2.5 5.57 2.5 7s-.345 4.39-2.5 7a11.2 11.2 0 0 1-2.5-7");
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="k3tlb5beb"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:bsx-background",
	});
}

export default Component;
