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
		"content": `<style>.cy58lm8nd {
  d: path("m5 20l3-9h13l-3 9z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qpf1wob0y {
  stroke-opacity: 0.4;
  d: path("M19 11V6h-7l-2-2H3v16h2");
}
</style><g class="nrj6p8qat"><path class="qpf1wob0y"/><path class="cy58lm8nd"/></g>`,
		"fallback": "coolicons:folder-open-duocolor-sharp",
	});
}

export default Component;
