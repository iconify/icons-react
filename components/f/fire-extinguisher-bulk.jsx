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

.dwzhsmbiq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 12a5 5 0 0 1 10 0v7a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3Z");
}

.zjfzr57xg {
  d: path("M12 6H9a3 3 0 0 0-3 3v7a1 1 0 0 1-2 0V9a5 5 0 0 1 5-5h3.838l5.846-1.949a1.001 1.001 0 0 1 .632 1.898L14 5.721V8a1 1 0 0 1-2 0Zm5 10H9a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="dwzhsmbiq"/><path class="zjfzr57xg"/></g>`,
		"fallback": "coolicons:fire-extinguisher-bulk",
	});
}

export default Component;
