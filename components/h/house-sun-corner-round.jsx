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
		"content": `<style>.csyn96gdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0L17.714 8M15.5 16.5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5 0h.5m-1.672 2.828l.354.354M16.5 20.5v.5m-2.828-1.672l-.354.354M12.5 16.5H12m1.672-2.828l-.354-.354M16.5 12.5V12m2.828 1.672l.354-.354");
}
</style><path class="csyn96gdk"/>`,
		"fallback": "coolicons:house-sun-corner-round",
	});
}

export default Component;
