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

.lshifnnga {
  fill: var(--svg-color--fff, #fff);
  d: path("M18.477 18.81a2.714 2.714 0 1 1 .928-3.818l-1.182.675a1.356 1.356 0 0 0-2.458.72a1.358 1.358 0 0 0 2.367.977h-.56v-.905h2.263v2.715h-1.358z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.uoaom3wzw {
  fill: var(--svg-color--f7b600, #f7b600);
  d: path("M24 0H0v24h24z");
}

.y5vr_pbbz {
  fill: var(--svg-color--fff, #fff);
  d: path("M12.596 19.305v-4.282a2.987 2.987 0 0 1-2.836-3.7a2.95 2.95 0 0 1 2.725-2.27a2.987 2.987 0 0 1 3.163 2.88H20c0-1.444-.494-2.791-1.297-3.992a7.305 7.305 0 0 0-12.997 1.73H4V14.2h1.664a7.3 7.3 0 0 0 2.907 3.873a7.2 7.2 0 0 0 4.025 1.232");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="uoaom3wzw"/><path class="y5vr_pbbz"/><path class="lshifnnga"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:cgt-background",
	});
}

export default Component;
