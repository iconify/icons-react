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
		"content": `<style>.pfsw77bcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11L3 15C3 17.2091 4.7909 19 7 19L17 19C19.2091 19 21 17.2091 21 15L21 11M2 11L22 11M8 19L7 21M16 19L17 21M3 11L3 6C3 4.3431 4.3431 3 6 3C7.0463 3 8.0169 3.5451 8.5615 4.4384M7.5 5.5L10 3");
}
</style><path class="pfsw77bcz"/>`,
		"fallback": "keyline-icons:bath",
	});
}

export default Component;
