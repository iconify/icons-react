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
		"content": `<style>.f7a7bc0ju {
  d: path("M9 2L15 2M3 7L21 7");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yghrljg0r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 6L19 6L19 22C19 22.5523 18.5523 23 18 23L6 23C5.4477 23 5 22.5523 5 22L5 6Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="yghrljg0r"/><path class="f7a7bc0ju"/></g>`,
		"fallback": "keyline-icons:bin-sharp-duotone",
	});
}

export default Component;
