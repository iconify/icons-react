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
		"content": `<style>.mnr58s2jh {
  d: path("M3 4h18v17H3Zm5-1.5v4m8-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzqga_vdc {
  d: path("m12.763 7.288l4.949 4.949l-2.475 2.475l-4.949-4.949Zm-.013 4.962L7 18");
}
</style><g class="ulnmmdpxh"><path class="mnr58s2jh"/><path class="yzqga_vdc"/></g>`,
		"fallback": "uix-sharp:court-date",
	});
}

export default Component;
