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
		"content": `<style>.b3ze4j7ov {
  stroke-opacity: 0.4;
  d: path("M12 16V3M9 6l3-3l3 3");
}

.nh40kqpwu {
  d: path("M10 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b3ze4j7ov"/><path class="nh40kqpwu"/></g>`,
		"fallback": "coolicons:git-push-duocolor",
	});
}

export default Component;
