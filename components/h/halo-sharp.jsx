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
		"content": `<style>.ht_zk-bpr {
  cx: 12px;
  cy: 14.75px;
  r: 6.5px;
}

.v-3b5cbqk {
  d: path("m8.5 13l1.125-1.125L10.75 13m2.5 0l1.125-1.125L15.5 13m-6 3.5l2.5 1.786l2.5-1.786M12 2.75c3 0 5.5.6 5.5 1.38S15 5.5 12 5.5s-5.5-.6-5.5-1.37S9 2.75 12 2.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ht_zk-bpr"/><path class="v-3b5cbqk"/></g>`,
		"fallback": "iconoven:halo-sharp",
	});
}

export default Component;
