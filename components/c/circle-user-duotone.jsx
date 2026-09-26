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

.k-h9or9ru {
  d: path("M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM13 14C15.6654 14 17.8419 16.0856 18 18.7082C16.3499 20.1841 14.2138 21 12 21C9.7862 21 7.65007 20.1841 6 18.7082C6.15709 16.0856 8.33462 14 11 14H13Z");
}

.ner24ccnr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z");
}
</style><g class="cuyn6tgcc"><path class="ner24ccnr"/><path class="k-h9or9ru"/></g>`,
		"fallback": "keyline-icons:circle-user-duotone",
	});
}

export default Component;
