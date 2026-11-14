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
		"content": `<style>.n42bz5bcq {
  d: path("M12 7V2.5m-2 2l2-2l2 2");
}

.s6p1_bbdp {
  d: path("m2.5 20.5l4.5-3l5-7l5 7l4.5 3");
}

.tyfapy8bb {
  fill: currentColor;
  d: path("M10 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s6p1_bbdp"/><path class="tyfapy8bb"/><path class="n42bz5bcq"/></g>`,
		"fallback": "uix-sharp:chart-peak",
	});
}

export default Component;
