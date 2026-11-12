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
		"content": `<style>.jvykynp5y {
  stroke-opacity: 0.4;
  d: path("m18 21l3-3l-3-3m3 3H3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uq006wbje {
  d: path("M7 5a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0Zm8 0a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0ZM3 9h.01");
}
</style><g class="nrj6p8qat"><path class="jvykynp5y"/><path class="uq006wbje"/></g>`,
		"fallback": "coolicons:decimal-increase-duocolor-sharp",
	});
}

export default Component;
