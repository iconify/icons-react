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

.lnenfne-q {
  fill: var(--svg-color--fff, #fff);
  d: path("M16.8 12c0 2.282-1.6 4.986-3.733 5.69v1.243h5.866L20 16.266h-1.067c-.266.534-.96 1.6-1.6 1.6h-1.637A6.935 6.935 0 0 0 12 5.066a6.933 6.933 0 0 0-3.696 12.8H6.667c-.64 0-1.334-1.066-1.6-1.6H4l1.067 2.667h5.866V17.69C8.8 16.986 7.2 14.282 7.2 12c0-2.651 2.15-5.867 4.8-5.867s4.8 3.216 4.8 5.866");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.wnouq6vdl {
  fill: var(--svg-color--0091cc, #0091cc);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="wnouq6vdl"/><path class="lnenfne-q"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:galeon-background",
	});
}

export default Component;
