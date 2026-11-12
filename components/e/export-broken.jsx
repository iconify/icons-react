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
		"content": `<style>.h-bumj92r {
  d: path("M12 20C7.58172 20 4 16.4183 4 12M20 12C20 14.5264 18.8289 16.7793 17 18.2454");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_hpbztkk {
  stroke-linejoin: round;
  d: path("M12 14L12 4M9 7L12 4L15 7");
}
</style><g class="ipq1z-bjh"><path class="h-bumj92r"/><path class="x_hpbztkk"/></g>`,
		"fallback": "solar:export-broken",
	});
}

export default Component;
