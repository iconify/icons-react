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
		"content": `<style>.b-bx2rzyd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 19L12 19C9.2386 19 7 16.7614 7 14C7 11.2386 9.2386 9 12 9L20.6247 9M15.7261 4.7809L21 9L15.6247 13.3002M3 3L3 21");
}
</style><path class="b-bx2rzyd"/>`,
		"fallback": "keyline-icons:arrow-u-turn-right-line-sharp-duotone",
	});
}

export default Component;
