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
		"content": `<style>.aal4d3puz {
  d: path("M7 17L7 22M14 17L14 22M2 22L19 22C20.1046 22 21 21.1046 21 20L21 19");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.jedxjj0qk {
  fill: currentColor;
  d: path("M12 4L12 9.0328C15.0214 9.2341 17.0144 10.3267 18.364 11.2762C19.4343 12.0292 20 13.2689 20 14.5135L20 17C20 17.5523 19.5523 18 19 18L11.5 18L4 18C3.4477 18 3 17.5523 3 17L3 6C3 5.5535 3.296 5.1611 3.7253 5.0385L10 3.2457L10 1L12 1Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="jedxjj0qk"/><path class="aal4d3puz"/></g>`,
		"fallback": "keyline-icons:ice-skate-sharp-fill",
	});
}

export default Component;
