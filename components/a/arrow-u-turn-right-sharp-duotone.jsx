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
		"content": `<style>.ywuvlsy5n {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 19L10 19C7.2386 19 5 16.7614 5 14C5 11.2386 7.2386 9 10 9L18.6246 9M13.726 4.7809L18.9999 9L13.6247 13.3002");
}
</style><path class="ywuvlsy5n"/>`,
		"fallback": "keyline-icons:arrow-u-turn-right-sharp-duotone",
	});
}

export default Component;
