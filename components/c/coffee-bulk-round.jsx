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
		"content": `<style>.aretu2cvj {
  d: path("m7.894 4.447l-1 2a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894m3 2a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894Zm5-2l-1 2a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894M17 9h2a3 3 0 1 1 0 6h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2h-2a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nn6caob4n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 13v-2a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2a8 8 0 0 1-16 0");
}
</style><g class="cuyn6tgcc"><path class="nn6caob4n"/><path class="aretu2cvj"/></g>`,
		"fallback": "coolicons:coffee-bulk-round",
	});
}

export default Component;
