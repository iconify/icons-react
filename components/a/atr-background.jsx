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
		"content": `<style>.ayypkug1b {
  fill: var(--svg-color--fff, #fff);
  d: path("M18 10.4a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}

.f3orm7_9f {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M15.2 12.058V12a5.6 5.6 0 1 0-5.6 5.6h5.6z");
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
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path clip-rule="evenodd" class="f3orm7_9f"/><path class="ayypkug1b"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:atr-background",
	});
}

export default Component;
