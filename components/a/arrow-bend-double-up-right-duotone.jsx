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
		"content": `<style>.bd8iusf0n {
  d: path("m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L212.69 104l-42.35-42.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32m-48 0l-48 48A8 8 0 0 1 120 152v-39.63A88.11 88.11 0 0 0 40 200a8 8 0 0 1-16 0a104.15 104.15 0 0 1 96-103.7V56a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32m-17-5.66L136 75.31v57.38Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.dowlzqban {
  d: path("m176 104l-48 48V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="dowlzqban"/><path class="bd8iusf0n"/></g>`,
		"fallback": "ph:arrow-bend-double-up-right-duotone",
	});
}

export default Component;
