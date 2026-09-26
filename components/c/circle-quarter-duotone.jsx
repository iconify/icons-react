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

.l-jc7emoh {
  d: path("M12 5C15.866 5 19 8.134 19 12C19 12.5523 18.5523 13 18 13L12 13C11.4477 13 11 12.5523 11 12L11 6C11 5.4477 11.4477 5 12 5Z");
}

.ner24ccnr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z");
}
</style><g class="cuyn6tgcc"><path class="ner24ccnr"/><path class="l-jc7emoh"/></g>`,
		"fallback": "keyline-icons:circle-quarter-duotone",
	});
}

export default Component;
