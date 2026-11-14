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
		"content": `<style>.n7tqdcbab {
  d: path("M21.5 7.5h-4a2 2 0 0 0 0 4h4M18 15v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wsq59ibye {
  d: path("M12.2 19.5H2.5v-15h19v10.7");
}
</style><g class="ulnmmdpxh"><path class="wsq59ibye"/><path class="n7tqdcbab"/></g>`,
		"fallback": "uix-sharp:crypto-wallet-plus",
	});
}

export default Component;
