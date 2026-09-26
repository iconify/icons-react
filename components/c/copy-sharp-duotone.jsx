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
		"content": `<style>.c-fn48bus {
  stroke-opacity: 0.4;
  d: path("M16 5L16.0001 2L2 2L2 16.0001L5 16");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.gpiqd5sil {
  fill: currentColor;
  d: path("M8 7L22 7C22.5523 7 23 7.4477 23 8L23 22C23 22.5523 22.5523 23 22 23L8 23C7.4477 23 7 22.5523 7 22L7 8C7 7.4477 7.4477 7 8 7Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="c-fn48bus"/><path class="gpiqd5sil"/></g>`,
		"fallback": "keyline-icons:copy-sharp-duotone",
	});
}

export default Component;
