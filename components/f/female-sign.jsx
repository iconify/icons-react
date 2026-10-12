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
		"content": `<style>.kr0n4pbye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25a5.5 5.5 0 1 1 0 11a5.5 5.5 0 1 1 0-11m0 11v7M8.75 18h6.5");
}
</style><path class="kr0n4pbye"/>`,
		"fallback": "iconoven:female-sign",
	});
}

export default Component;
