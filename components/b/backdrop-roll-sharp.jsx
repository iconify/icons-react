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
		"content": `<style>.t87kkqbee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v3.5H2.75zm3.5 3.5h11.5V19H6.25v-2.5Zm-2.5 0v15m16.5-15v15");
}
</style><path class="t87kkqbee"/>`,
		"fallback": "iconoven:backdrop-roll-sharp",
	});
}

export default Component;
