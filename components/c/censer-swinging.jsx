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
		"content": `<style>.rikq9p_pp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13h14a7 7 0 0 1-14 0ZM6.5 3h7m-7 0L5 13m8.5-10L15 13M10 3v10m9.5-1.5c-1.5-2 1.5-3.5 0-6");
}
</style><path class="rikq9p_pp"/>`,
		"fallback": "uix-sharp:censer-swinging",
	});
}

export default Component;
