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

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.w2ok0h_1g {
  fill: var(--svg-color--fa096f, #fa096f);
  d: path("M24 0H0v24h24z");
}

.wosp46b1b {
  fill: var(--svg-color--fff, #fff);
  d: path("M16 15.595A4.72 4.72 0 0 1 12.75 17C10.445 17 8 14.95 8 12s2.445-5 4.75-5a4.83 4.83 0 0 1 3.74 1.965L19 7.325A7.75 7.75 0 0 0 12.75 4C8.61 4 5 7.58 5 12s3.61 8 7.75 8A7.75 7.75 0 0 0 19 16.675V11h-5.5v2.5H16z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="w2ok0h_1g"/><path class="wosp46b1b"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:gami-background",
	});
}

export default Component;
