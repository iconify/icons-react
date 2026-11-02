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
		"content": `<style>.ij17yhh5a {
  d: path("m3 7l5 5l-5 5zm9-2v2m0 4v2m0 4v2");
}

.ivq85pc-f {
  stroke-opacity: 0.4;
  d: path("m21 7l-5 5l5 5z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ivq85pc-f"/><path class="ij17yhh5a"/></g>`,
		"fallback": "coolicons:flip-horizontal-duocolor-sharp",
	});
}

export default Component;
