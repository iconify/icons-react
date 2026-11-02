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

.gdk3sta4n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m16.894 10.553l5 10A1 1 0 0 1 21 22H3a1 1 0 0 1-.894-1.447l9-18a.998.998 0 0 1 1.788 0Z");
}

.j4qh7cpvq {
  d: path("M15 8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm3 6a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="gdk3sta4n"/><path class="j4qh7cpvq"/></g>`,
		"fallback": "coolicons:chart-pyramid-bulk-sharp",
	});
}

export default Component;
