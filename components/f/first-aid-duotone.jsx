import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.eseu9b_xl {
  d: path("M224 104v48a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56H40a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56V40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q2_p-acif {
  d: path("M216 88h-48V40a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v48H40a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-56a8 8 0 0 0-8 8v56h-48v-56a8 8 0 0 0-8-8H40v-48h56a8 8 0 0 0 8-8V40h48v56a8 8 0 0 0 8 8h56Z");
}
</style><g class="cuyn6tgcc"><path class="eseu9b_xl"/><path class="q2_p-acif"/></g>`,
		"fallback": "ph:first-aid-duotone",
	});
}

export default Component;
