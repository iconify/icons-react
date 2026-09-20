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
		"content": `<style>.ak_p5sw8j {
  d: path("m221.66 90.34l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 120 104h40v80H24a8 8 0 0 0 0 16h144a8 8 0 0 0 8-8v-88h40a8 8 0 0 0 5.66-13.66M139.31 88L168 59.31L196.69 88Z");
}

.andqlfogi {
  d: path("M216 96h-96l48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="andqlfogi"/><path class="ak_p5sw8j"/></g>`,
		"fallback": "ph:arrow-elbow-right-up-duotone",
	});
}

export default Component;
