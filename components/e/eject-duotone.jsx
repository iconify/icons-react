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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.k7n9aqbff {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m5.304 12.94l5-8a1.998 1.998 0 0 1 3.392 0l5 8A2 2 0 0 1 17 16H7a2 2 0 0 1-1.696-3.06");
}

.uanjy7bfd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5.304 12.94l5-8a2 2 0 0 1 3.392 0l5 8C19.529 14.272 18.571 16 17 16H7c-1.57 0-2.529-1.728-1.696-3.06M5 20h14");
}
</style><g class="ft5dv1b6b"><path class="k7n9aqbff"/><path class="uanjy7bfd"/></g>`,
		"fallback": "coolicons:eject-duotone",
	});
}

export default Component;
