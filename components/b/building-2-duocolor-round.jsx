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
		"content": `<style>.iklqjqbvt {
  stroke-opacity: 0.4;
  d: path("M12 11a2.83 2.83 0 0 1 4 0l2 2c.64.64 1 1.72 1 3v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q73c0pb0w {
  d: path("M3 20h18m-9 0V7a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v13");
}
</style><g class="nrj6p8qat"><path class="iklqjqbvt"/><path class="q73c0pb0w"/></g>`,
		"fallback": "coolicons:building-2-duocolor-round",
	});
}

export default Component;
