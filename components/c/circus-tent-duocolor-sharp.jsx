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
		"content": `<style>.h3mdmwu4o {
  stroke-opacity: 0.4;
  d: path("M12 7V3l3 1l-3 1M8 21l4-4l4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.px0wev7nk {
  d: path("M4 21V11c0-2 6-2 8-4c2 2 8 2 8 4v10M3 21h5m8 0h5M4 11a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0");
}
</style><g class="nrj6p8qat"><path class="h3mdmwu4o"/><path class="px0wev7nk"/></g>`,
		"fallback": "coolicons:circus-tent-duocolor-sharp",
	});
}

export default Component;
