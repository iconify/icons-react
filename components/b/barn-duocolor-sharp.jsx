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
		"content": `<style>.myzihvb4s {
  d: path("m12 3l5 3l3 4v11H4V10l3-4zM3 21h18");
}

.nqd460bib {
  stroke-opacity: 0.4;
  d: path("M9 21v-5h6v5m-5-11a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="nqd460bib"/><path class="myzihvb4s"/></g>`,
		"fallback": "coolicons:barn-duocolor-sharp",
	});
}

export default Component;
