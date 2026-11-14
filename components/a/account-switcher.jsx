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
		"content": `<style>.bcd684bmq {
  d: path("M15.5 16.5L18 14l2.5 2.5m-5 3L18 22l2.5-2.5");
}

.dzhsxqbte {
  d: path("M13.6 21.5H4.5v-19h15v9.1m-11-9.1v19m3-14.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dzhsxqbte"/><path class="bcd684bmq"/></g>`,
		"fallback": "uix-sharp:account-switcher",
	});
}

export default Component;
