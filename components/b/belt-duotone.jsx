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

.jf19rkb7v {
  d: path("M8 88h96v80H8Zm176 0v80h64V88Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.whqf2ccqk {
  d: path("M248 160h-56V96h56a8 8 0 0 0 0-16h-58.16A16 16 0 0 0 176 72h-64a16 16 0 0 0-13.84 8H64a8 8 0 0 0-16 0H8a8 8 0 0 0 0 16h40v64H8a8 8 0 0 0 0 16h40a8 8 0 0 0 16 0h34.16a16 16 0 0 0 13.84 8h64a16 16 0 0 0 13.84-8H248a8 8 0 0 0 0-16M64 96h32v64H64Zm48 72V88h64v32h-32a8 8 0 0 0 0 16h32v32Z");
}
</style><g class="cuyn6tgcc"><path class="jf19rkb7v"/><path class="whqf2ccqk"/></g>`,
		"fallback": "ph:belt-duotone",
	});
}

export default Component;
