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

.p2lti1bba {
  d: path("M208 32v160H72a24 24 0 0 0-24 24V56a24 24 0 0 1 24-24Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v6b374utt {
  d: path("M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-8 160H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h128Z");
}
</style><g class="cuyn6tgcc"><path class="p2lti1bba"/><path class="v6b374utt"/></g>`,
		"fallback": "ph:book-duotone",
	});
}

export default Component;
