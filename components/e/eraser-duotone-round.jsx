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
		"content": `<style>.a3echzbsw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m7 20l-1-1a4.24 4.24 0 0 1 0-6l6-6a4.242 4.242 0 1 1 6 6l-7 7Z");
}

.ft5dv1b6b {
  fill: none;
}

.nh03-69zu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 16l3-3a4.243 4.243 0 0 0-6-6l-3 3m2 10h10M9 10l6 6m-6-6l-3 3a4.243 4.243 0 0 0 0 6l1 1h4l4-4");
}
</style><g class="ft5dv1b6b"><path class="a3echzbsw"/><path class="nh03-69zu"/></g>`,
		"fallback": "coolicons:eraser-duotone-round",
	});
}

export default Component;
