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
		"content": `<style>.he3nq8bvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.39 5.908l-3.074 4.966A1.393 1.393 0 0 0 11.5 13h.606a1.5 1.5 0 0 1 1.46 1.844L13 17.25a.946.946 0 0 0 1.67.795l4.149-5.369A1.35 1.35 0 0 0 17.75 10.5h-1.153A1.5 1.5 0 0 1 15.1 8.906l.15-2.406a1.006 1.006 0 0 0-1.86-.592M3 7h5.5m-6 5H6m-2 5h4.5");
}
</style><path class="he3nq8bvz"/>`,
		"fallback": "uix:flash-high-speed-sync",
	});
}

export default Component;
