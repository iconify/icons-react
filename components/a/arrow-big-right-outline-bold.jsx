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
		"content": `<style>.rwbhexbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
  d: path("m21 12 -9 9v-5H3V8h9V3Z");
}
</style><path class="rwbhexbth"/>`,
		"fallback": "iconmind:arrow-big-right-outline-bold",
	});
}

export default Component;
