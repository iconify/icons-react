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
		"content": `<style>.aktvocb2e {
  fill: var(--svg-color--eab300, #eab300);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.uh81b1ouv {
  fill: var(--svg-color--fff, #fff);
  d: path("M8 4v2H6v2h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-.5L6 18h2v2h2v-2h1.5v2h2v-2h1v-.008c1.954-.12 3.5-1.637 3.5-3.492c0-1.412-.896-2.629-2.187-3.182C16.539 10.768 17 9.934 17 9c0-1.838-2-3-3.5-3V4h-2v2H10V4zm2 12v-3.5h3.25a1.75 1.75 0 1 1 0 3.5zm0-8h2.5a1.5 1.5 0 1 1 0 3H10z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="aktvocb2e"/><path class="uh81b1ouv"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:bsv-background",
	});
}

export default Component;
