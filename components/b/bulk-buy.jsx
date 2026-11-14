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
		"content": `<style>.i20ueebmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.75h3.25A1.75 1.75 0 0 1 10.5 4.5v3a1.75 1.75 0 0 1-1.75 1.75H5.5A1.75 1.75 0 0 1 3.75 7.5v-3A1.75 1.75 0 0 1 5.5 2.75m9.5 0h3.25A1.75 1.75 0 0 1 20 4.5v3a1.75 1.75 0 0 1-1.75 1.75H15a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 15 2.75M5.5 12h3.25a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75H5.5a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 5.5 12m9.5 0h3.25A1.75 1.75 0 0 1 20 13.75v3a1.75 1.75 0 0 1-1.75 1.75H15a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 15 12M2.5 18.5h19M5 18.5v3m14-3v3");
}
</style><path class="i20ueebmg"/>`,
		"fallback": "uix:bulk-buy",
	});
}

export default Component;
