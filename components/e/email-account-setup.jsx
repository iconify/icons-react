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
		"content": `<style>.fyij00bvx {
  d: path("M13.75 12v1a1.5 1.5 0 0 0 3 0v-1a4.75 4.75 0 1 0-2.25 4");
}

.mq4k0beeg {
  d: path("m10.421 4.668l.314-2.083h2.53l.314 2.083l2.489 1.031l1.695-1.251l1.789 1.789l-1.251 1.695l1.031 2.489l2.083.314v2.53l-2.083.314l-1.031 2.489l1.251 1.695l-1.789 1.789l-1.695-1.251l-2.489 1.031l-.314 2.083h-2.53l-.314-2.083l-2.489-1.031l-1.695 1.251l-1.789-1.789l1.251-1.695l-1.031-2.489l-2.083-.314v-2.53l2.083-.314l1.031-2.489l-1.251-1.695l1.789-1.789l1.695 1.251Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdo1j_06c {
  d: path("M10.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="mq4k0beeg"/><path class="vdo1j_06c"/><path class="fyij00bvx"/></g>`,
		"fallback": "uix-sharp:email-account-setup",
	});
}

export default Component;
