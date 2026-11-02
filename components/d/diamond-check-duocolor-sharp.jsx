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
		"content": `<style>.fs89iqu4z {
  d: path("m17 17l-5 5L2 12L12 2l10 10z");
}

.k8s1leb8y {
  stroke-opacity: 0.4;
  d: path("m9 12l2 2l4-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="k8s1leb8y"/><path class="fs89iqu4z"/></g>`,
		"fallback": "coolicons:diamond-check-duocolor-sharp",
	});
}

export default Component;
