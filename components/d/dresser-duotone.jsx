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

.gysykrgam {
  d: path("M144 192a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M120 72h16a8 8 0 0 0 0-16h-16a8 8 0 0 0 0 16m16 48h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m80-80v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16M56 152h144v-48H56Zm0-112v48h144V40Zm144 176v-48H56v48z");
}

.ig038kb3s {
  d: path("M208 40v176a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ig038kb3s"/><path class="gysykrgam"/></g>`,
		"fallback": "ph:dresser-duotone",
	});
}

export default Component;
