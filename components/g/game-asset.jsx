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
		"content": `<style>.g2y_nw01z {
  d: path("M4.5 12.25v7.25a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7.25Zm0 0l-2-2.75m17 2.75l2-2.75m-9.5-7l3 1.75v3.5L12 9.5L9 7.75v-3.5Z");
}

.k9e20tbsu {
  d: path("M9 4.25L12 6l3-1.75M12 6v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g2y_nw01z"/><path class="k9e20tbsu"/></g>`,
		"fallback": "uix-sharp:game-asset",
	});
}

export default Component;
