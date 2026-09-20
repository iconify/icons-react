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
		"content": `<style>.gnvc2jbpq {
  d: path("M12 10c3 0 5 -2 5 -5 -3 0 -5 2 -5 5");
}

.h7bcztycq {
  d: path("M12 8v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y92rdcc_s {
  d: path("M9 16v5h6v-5Z");
}

.zdy8cdcdt {
  d: path("M12 12c-3 0 -5 -2 -5 -5 3 0 5 2 5 5");
}
</style><g class="nrj6p8qat"><path class="y92rdcc_s"/><path class="h7bcztycq"/><path class="zdy8cdcdt"/><path class="gnvc2jbpq"/></g>`,
		"fallback": "iconmind:indoor-plant-outline-regular",
	});
}

export default Component;
