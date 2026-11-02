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
		"content": `<style>.j14y-p33h {
  d: path("m12 8l-4 4l4 4m-4-4h12");
}

.nrj6p8qat {
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
</style><g class="nrj6p8qat"><path class="srpel7lyw"/><path class="j14y-p33h"/></g>`,
		"fallback": "coolicons:arrow-left-to-line-duocolor-round",
	});
}

export default Component;
