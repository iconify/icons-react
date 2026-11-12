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

.j2439_glk {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 18a1 1 0 0 0 1 1h16a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V4a1 1 0 0 1 2 0Z");
}

.yvcxd9stk {
  d: path("M11 6c.351 0 .677.184.857.486L14.566 11H16c1.348.001 2.357 1.478 2.894 2.553l3 6a1 1 0 1 1-1.788.894l-3-6c-.216-.431-.47-.857-.813-1.2c-.093-.093-.2-.197-.324-.247H14a1 1 0 0 1-.857-.486L10.434 8H7a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="j2439_glk"/><path class="yvcxd9stk"/></g>`,
		"fallback": "coolicons:chart-burndown-bulk",
	});
}

export default Component;
