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

.e8ncf8b3u {
  d: path("M224 112H32l29.89-67.25A8 8 0 0 1 69.2 40h117.6a8 8 0 0 1 7.31 4.75Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oif0webfl {
  d: path("M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M69.2 48h117.6l24.89 56H44.31ZM216 200h-24v-24a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v24H40v-80h176Z");
}
</style><g class="cuyn6tgcc"><path class="e8ncf8b3u"/><path class="oif0webfl"/></g>`,
		"fallback": "ph:car-simple-duotone",
	});
}

export default Component;
