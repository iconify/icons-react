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
		"content": `<style>.ec9uhgb5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 5L12 5C9.2386 5 7 7.2386 7 10C7 12.7614 9.2386 15 12 15L20 15M16 19L20.8123 15.3904C21.0625 15.1903 21.0625 14.8097 20.8123 14.6096L16 11M3 20L3 4");
}
</style><path class="ec9uhgb5n"/>`,
		"fallback": "keyline-icons:arrow-u-turn-right-line-flip-fill",
	});
}

export default Component;
