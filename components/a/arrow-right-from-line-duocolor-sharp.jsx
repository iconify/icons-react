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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.srpel7lyw {
  stroke-opacity: 0.4;
  d: path("M4 6v12");
}

.xw8_zjbhs {
  d: path("m16 16l4-4l-4-4m4 4H8");
}
</style><g class="nrj6p8qat"><path class="srpel7lyw"/><path class="xw8_zjbhs"/></g>`,
		"fallback": "coolicons:arrow-right-from-line-duocolor-sharp",
	});
}

export default Component;
