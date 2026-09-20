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
		"content": `<style>.c9kju3c-a {
  d: path("m229.66 146.34l-48-48A8 8 0 0 0 168 104v40h-40a88.1 88.1 0 0 1-88-88a8 8 0 0 0-16 0a104.11 104.11 0 0 0 104 104h40v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 180.69v-57.38L212.69 152Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.lj-0u6bdp {
  d: path("m224 152l-48 48v-96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="lj-0u6bdp"/><path class="c9kju3c-a"/></g>`,
		"fallback": "ph:arrow-bend-down-right-duotone",
	});
}

export default Component;
