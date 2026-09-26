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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.lvgl99b6v {
  d: path("M9 8L22 8C22.5523 8 23 8.4477 23 9L23 22C23 22.5523 22.5523 23 22 23L9 23C8.4477 23 8 22.5523 8 22L8 9C8 8.4477 8.4477 8 9 8Z");
}

.xcygzbb7m {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 9C17 13.2803 13.2803 17 9 17C4.7197 17 1 13.2803 1 9C1 4.7197 4.7197 1 9 1C13.2803 1 17 4.7197 17 9Z");
}
</style><g class="cuyn6tgcc"><path class="xcygzbb7m"/><path class="lvgl99b6v"/></g>`,
		"fallback": "keyline-icons:circle-square-sharp-duotone",
	});
}

export default Component;
