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
		"content": `<style>.awa2b_b8t {
  fill: var(--svg-color--fff, #fff);
  d: path("M14.353 9.092L12 4.942l-2.353 4.15v5.562a4.2 4.2 0 0 1 2.965-1.242c.616 0 1.21.141 1.74.39zm1.412 2.494v7.473H20zm-1.412 7.473h-4.47a3.06 3.06 0 0 1 4.47-3.755zm-6.118 0H4l4.235-7.473z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.yw9w4dbcc {
  fill: var(--svg-color--020041, #020041);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="yw9w4dbcc"/><path class="awa2b_b8t"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:ach-background",
	});
}

export default Component;
