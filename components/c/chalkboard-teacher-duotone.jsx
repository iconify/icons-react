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

.d674zu-yy {
  d: path("M192 80v96h-88a32 32 0 1 0-32-32h-8V80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.joufw1b9b {
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h13.39a8 8 0 0 0 7.23-4.57a48 48 0 0 1 86.76 0a8 8 0 0 0 7.23 4.57H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M80 144a24 24 0 1 1 24 24a24 24 0 0 1-24-24m136 56h-56.57a64.4 64.4 0 0 0-28.83-26.16a40 40 0 1 0-53.2 0A64.4 64.4 0 0 0 48.57 200H40V56h176ZM56 96V80a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h8V88H72v8a8 8 0 0 1-16 0");
}
</style><g class="cuyn6tgcc"><path class="d674zu-yy"/><path class="joufw1b9b"/></g>`,
		"fallback": "ph:chalkboard-teacher-duotone",
	});
}

export default Component;
