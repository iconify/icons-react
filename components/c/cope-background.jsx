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
		"content": `<style>.cf882h4uv {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 12a1.6 1.6 0 1 1 3.2 0A1.6 1.6 0 0 1 4 12m6.4 0a1.6 1.6 0 1 1 3.2 0a1.6 1.6 0 0 1-3.2 0m8-1.6a1.6 1.6 0 1 0 0 3.2a1.6 1.6 0 0 0 0-3.2");
}

.ft5dv1b6b {
  fill: none;
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="cf882h4uv"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:cope-background",
	});
}

export default Component;
