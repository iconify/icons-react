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
		"content": `<style>.zs38y733a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5V4A1.5 1.5 0 0 1 5 2.5h5.5A1.5 1.5 0 0 1 12 4v5h7a1.5 1.5 0 0 1 1.5 1.5v11ZM12 9v12.5M6.5 7H9m-2.5 4H9m-2.5 4H9m6-2h2.5M15 17h2.5");
}
</style><path class="zs38y733a"/>`,
		"fallback": "uix:account-size",
	});
}

export default Component;
