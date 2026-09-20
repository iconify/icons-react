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

.fqsaxlb5u {
  d: path("m205.66 114.34l-72-72a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 128h144a8 8 0 0 0 5.66-13.66M75.31 112L128 59.31L180.69 112Z");
}

.omn210vey {
  d: path("M200 120H56l72-72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="omn210vey"/><path class="fqsaxlb5u"/></g>`,
		"fallback": "ph:control-duotone",
	});
}

export default Component;
