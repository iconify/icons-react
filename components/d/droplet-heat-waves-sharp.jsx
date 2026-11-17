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
		"content": `<style>.zu0tv2bzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3S5 8 5 14a7 7 0 0 0 14 0c0-6-7-11-7-11m-2 13q1.334-1.5 0-3q-1.333-1.5 0-3m4 6q1.334-1.5 0-3t0-3");
}
</style><path class="zu0tv2bzc"/>`,
		"fallback": "coolicons:droplet-heat-waves-sharp",
	});
}

export default Component;
