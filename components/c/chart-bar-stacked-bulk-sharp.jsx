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
		"content": `<style>.aho4vn53c {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10 3h4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-4a.997.997 0 0 1-1-1V4a1 1 0 0 1 1-1m12 10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1ZM7 10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Zm7 11h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m7-6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1ZM2 20v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.jqyqz0bst {
  d: path("M14 14v-1h-4v7a1 1 0 0 1-2 0v-4H3a1 1 0 0 1 0-2h5v-3a1 1 0 0 1 2 0h4V8a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0Z");
}
</style><g class="cuyn6tgcc"><path class="aho4vn53c"/><path class="jqyqz0bst"/></g>`,
		"fallback": "coolicons:chart-bar-stacked-bulk-sharp",
	});
}

export default Component;
