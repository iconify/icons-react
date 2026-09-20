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

.kd7csy_jk {
  d: path("m229.66 98.34l-48-48A8 8 0 0 0 168 56v40h-40A104.11 104.11 0 0 0 24 200a8 8 0 0 0 16 0a88.1 88.1 0 0 1 88-88h40v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 132.69V75.31L212.69 104Z");
}

.np041-bwo {
  d: path("m224 104l-48 48V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="np041-bwo"/><path class="kd7csy_jk"/></g>`,
		"fallback": "ph:arrow-bend-up-right-duotone",
	});
}

export default Component;
