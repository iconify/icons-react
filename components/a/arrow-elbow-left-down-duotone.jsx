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

.hd-pov5qu {
  d: path("M232 64H88a8 8 0 0 0-8 8v88H40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 136 160H96V80h136a8 8 0 0 0 0-16M88 204.69L59.31 176h57.38Z");
}

.uc06xsbii {
  d: path("m136 168l-48 48l-48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="uc06xsbii"/><path class="hd-pov5qu"/></g>`,
		"fallback": "ph:arrow-elbow-left-down-duotone",
	});
}

export default Component;
