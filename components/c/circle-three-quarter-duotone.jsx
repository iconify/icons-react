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

.ner24ccnr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z");
}

.zc-tu8brc {
  d: path("M12 5C15.866 5 19 8.134 19 12C19 15.866 15.866 19 12 19C8.134 19 5 15.866 5 12C5 11.4477 5.4477 11 6 11L11 11L11 6C11 5.4477 11.4477 5 12 5Z");
}
</style><g class="cuyn6tgcc"><path class="ner24ccnr"/><path class="zc-tu8brc"/></g>`,
		"fallback": "keyline-icons:circle-three-quarter-duotone",
	});
}

export default Component;
