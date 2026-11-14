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
		"content": `<style>.n4febxbsj {
  d: path("M12.9 19.5H2.5v-15h19v9.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhxw951ez {
  d: path("M21.5 7.5h-4a2 2 0 0 0 0 4h4m-6.25 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}
</style><g class="ulnmmdpxh"><path class="n4febxbsj"/><path class="vhxw951ez"/></g>`,
		"fallback": "uix-sharp:crypto-wallet-search",
	});
}

export default Component;
