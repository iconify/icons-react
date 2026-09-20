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
		"content": `<style>.c9epvhehk {
  d: path("M195.88 195.88a96 96 0 1 1 0-135.76a96 96 0 0 1 0 135.76");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.tiu0tzxno {
  d: path("M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-64.57-67.89a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L108.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Zm56 0a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L164.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Z");
}
</style><g class="cuyn6tgcc"><path class="c9epvhehk"/><path class="tiu0tzxno"/></g>`,
		"fallback": "ph:caret-circle-double-right-duotone",
	});
}

export default Component;
