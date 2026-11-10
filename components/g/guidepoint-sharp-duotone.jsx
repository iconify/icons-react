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

.g1a2w27sq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 8C7.209 8 9 9.79 9 12C9 14.21 7.209 16 5 16C2.791 16 1 14.21 1 12C1 9.79 2.791 8 5 8ZM19 8C21.209 8 23 9.79 23 12C23 14.21 21.209 16 19 16C16.791 16 15 14.21 15 12C15 9.79 16.791 8 19 8Z");
}

.ryqxrrmeb {
  d: path("M16 11V13H8V11H16Z");
}
</style><g class="cuyn6tgcc"><path class="g1a2w27sq"/><path class="ryqxrrmeb"/></g>`,
		"fallback": "keyline-icons:guidepoint-sharp-duotone",
	});
}

export default Component;
