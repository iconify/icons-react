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
		"content": `<style>.ag8ioobmu {
  d: path("m181.66 122.34l-80-80A8 8 0 0 0 88 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M104 188.69V67.31L164.69 128Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.vvj68bcpv {
  d: path("m176 128l-80 80V48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="vvj68bcpv"/><path class="ag8ioobmu"/></g>`,
		"fallback": "ph:caret-right-duotone",
	});
}

export default Component;
