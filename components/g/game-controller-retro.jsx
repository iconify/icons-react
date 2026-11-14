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
		"content": `<style>.bkm5vacxi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h19v10h-19ZM7 9.75v4.5M4.75 12h4.5M11 13h2m3 0h.01m2.74-2h.01");
}
</style><path class="bkm5vacxi"/>`,
		"fallback": "uix-sharp:game-controller-retro",
	});
}

export default Component;
