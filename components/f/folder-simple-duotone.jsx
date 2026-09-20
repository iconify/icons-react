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

.e3064-r1c {
  d: path("M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6L128 80h88a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s_b6zxbwb {
  d: path("M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Z");
}
</style><g class="cuyn6tgcc"><path class="e3064-r1c"/><path class="s_b6zxbwb"/></g>`,
		"fallback": "ph:folder-simple-duotone",
	});
}

export default Component;
