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

.n3--wobtr {
  d: path("M208 116v36a80 80 0 0 1-160 0V76a20 20 0 0 1 40 0V44a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0v56a20 20 0 0 1 40 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z72lshbbp {
  d: path("M188 88a27.75 27.75 0 0 0-12 2.71V60a28 28 0 0 0-41.36-24.6A28 28 0 0 0 80 44v6.71A27.75 27.75 0 0 0 68 48a28 28 0 0 0-28 28v76a88 88 0 0 0 176 0v-36a28 28 0 0 0-28-28m12 64a72 72 0 0 1-144 0V76a12 12 0 0 1 24 0v44a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v68a8 8 0 0 0 16 0V60a12 12 0 0 1 24 0v68.67A48.08 48.08 0 0 0 120 176a8 8 0 0 0 16 0a32 32 0 0 1 32-32a8 8 0 0 0 8-8v-20a12 12 0 0 1 24 0Z");
}
</style><g class="cuyn6tgcc"><path class="n3--wobtr"/><path class="z72lshbbp"/></g>`,
		"fallback": "ph:hand-palm-duotone",
	});
}

export default Component;
