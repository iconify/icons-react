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

.d7hvob1ts {
  d: path("M7 5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V5a.997.997 0 0 0-1-1h-4a.997.997 0 0 0-1 1v2a1 1 0 0 1-2 0Zm13 7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2ZM9 20h6v-1a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0Z");
}

.jf11r6bpa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10 2h4a3 3 0 0 1 2.806 4.064A5.005 5.005 0 0 1 21 11v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a5.005 5.005 0 0 1 4.194-4.936A3.002 3.002 0 0 1 10 2M9 4v2h6V4Z");
}
</style><g class="cuyn6tgcc"><path class="jf11r6bpa"/><path class="d7hvob1ts"/></g>`,
		"fallback": "coolicons:gas-cylinder-bulk",
	});
}

export default Component;
