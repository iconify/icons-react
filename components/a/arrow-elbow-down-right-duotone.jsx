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
		"content": `<style>.cj6rvqbix {
  d: path("m216 176l-48 48v-96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.r4kdcvjzr {
  d: path("m221.66 170.34l-48-48A8 8 0 0 0 160 128v40H80V32a8 8 0 0 0-16 0v144a8 8 0 0 0 8 8h88v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M176 204.69v-57.38L204.69 176Z");
}
</style><g class="cuyn6tgcc"><path class="cj6rvqbix"/><path class="r4kdcvjzr"/></g>`,
		"fallback": "ph:arrow-elbow-down-right-duotone",
	});
}

export default Component;
