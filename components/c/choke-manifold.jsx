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
		"content": `<style>.hdmfskbtc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 11h16.5A1.75 1.75 0 0 1 22 12.75v.5A1.75 1.75 0 0 1 20.25 15H3.75A1.75 1.75 0 0 1 2 13.25v-.5A1.75 1.75 0 0 1 3.75 11M4 5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 0h6M7 2v9m7-6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 0h6m-3-3v9m-6.5 4v6.5m3-6.5v6.5");
}
</style><path class="hdmfskbtc"/>`,
		"fallback": "uix:choke-manifold",
	});
}

export default Component;
