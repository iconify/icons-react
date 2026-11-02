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
		"content": `<style>.c1thob-9r {
  d: path("M3 11h7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m11 0h7a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.uz103-b6l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9.236 10.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338");
}
</style><g class="cuyn6tgcc"><path class="uz103-b6l"/><path class="c1thob-9r"/></g>`,
		"fallback": "coolicons:git-commit-bulk-sharp",
	});
}

export default Component;
