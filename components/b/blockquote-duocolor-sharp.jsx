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

.ty9i5gufy {
  d: path("M8 6h12M8 10h12M8 14h12M8 18h8");
}
</style><g class="nrj6p8qat"><path class="srpel7lyw"/><path class="ty9i5gufy"/></g>`,
		"fallback": "coolicons:blockquote-duocolor-sharp",
	});
}

export default Component;
