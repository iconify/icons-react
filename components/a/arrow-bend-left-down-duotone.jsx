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

.jdk-r9isq {
  d: path("m152 176l-48 48l-48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ox915ubja {
  d: path("M200 24A104.11 104.11 0 0 0 96 128v40H56a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 152 168h-40v-40a88.1 88.1 0 0 1 88-88a8 8 0 0 0 0-16m-96 188.69L75.31 184h57.38Z");
}
</style><g class="cuyn6tgcc"><path class="jdk-r9isq"/><path class="ox915ubja"/></g>`,
		"fallback": "ph:arrow-bend-left-down-duotone",
	});
}

export default Component;
