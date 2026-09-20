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

.og6e7jbak {
  fill: var(--svg-color--24abcd, #24abcd);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.woulzq4md {
  fill: var(--svg-color--fff, #fff);
  d: path("M17 12a5.001 5.001 0 1 1-5-5V4a8 8 0 1 0 8 8zm0-3.5V12h-3.5V8.5zm0 0v-2h2v2z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="og6e7jbak"/><path class="woulzq4md"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:gse-background",
	});
}

export default Component;
