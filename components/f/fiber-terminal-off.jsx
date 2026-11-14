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
		"content": `<style>.larqn4bnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4.1V3h13v13h-1.1m-7.8 0H8v-4.1m-5.5.1H8m-5.5 3H8M3.5 3.5l17 17");
}
</style><path class="larqn4bnk"/>`,
		"fallback": "uix-sharp:fiber-terminal-off",
	});
}

export default Component;
