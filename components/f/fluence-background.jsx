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

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.tzvt81bls {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M11.422 4h1.216v2.684a5.355 5.355 0 0 1 0 10.632V20h-1.216v-2.677a5.354 5.354 0 0 1 0-10.645zm0 3.904a4.138 4.138 0 0 0 0 8.193zm1.216 8.184a4.138 4.138 0 0 0 0-8.176z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path clip-rule="evenodd" class="tzvt81bls"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:fluence-background",
	});
}

export default Component;
