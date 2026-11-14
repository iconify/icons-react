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
		"content": `<style>.zbp2_mrlx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14L14 3M3 21L21 3M10 21l11-11M10 3l11 11M3 3l18 18M3 10l11 11");
}
</style><path class="zbp2_mrlx"/>`,
		"fallback": "uix-sharp:cross-hatching",
	});
}

export default Component;
