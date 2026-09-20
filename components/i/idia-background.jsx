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

.mdgk6hbbc {
  fill: var(--svg-color--fff, #fff);
  d: path("M5.751 4.5v14.248c0 .47.375.745.75.745c.275 0 .55-.15.685-.47L12.77 5.015A.744.744 0 0 0 12.08 4H6.25a.5.5 0 0 0-.494.5zM9.53 19.328L14.616 6.31A.49.49 0 0 1 15.04 6c.11-.01.225.025.32.1c5.705 4.554 2.47 14.283-5.414 13.888a.476.476 0 0 1-.415-.66");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.sky-u3csq {
  fill: var(--svg-color--ff0ea9, #ff0ea9);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="sky-u3csq"/><path class="mdgk6hbbc"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:idia-background",
	});
}

export default Component;
