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

.qzb94kbcr {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M12 18a6 6 0 0 0 1-11.915V9.71a2.5 2.5 0 1 1-2 0V6.085A6 6 0 0 0 12 18m0 2a8 8 0 1 0 0-15.999A8 8 0 0 0 12 20");
}

.xwq1e2bkp {
  fill: var(--svg-color--4bff00, #4bff00);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="xwq1e2bkp"/><path clip-rule="evenodd" class="qzb94kbcr"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:eqb-background",
	});
}

export default Component;
