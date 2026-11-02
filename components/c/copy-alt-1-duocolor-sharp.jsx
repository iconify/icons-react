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
		"content": `<style>.n70g8xb1k {
  d: path("M3 9h12v12H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zwbv977cx {
  stroke-opacity: 0.4;
  d: path("M9 9V3h12v12h-6");
}
</style><g class="nrj6p8qat"><path class="zwbv977cx"/><path class="n70g8xb1k"/></g>`,
		"fallback": "coolicons:copy-alt-1-duocolor-sharp",
	});
}

export default Component;
