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
		"content": `<style>.az2emlout {
  d: path("M3 11a1 1 0 0 1 0-2h.382l2.724-5.447A1 1 0 0 1 7 3h10c.379 0 .725.214.894.553L20.618 9H21a1 1 0 0 1 0 2Zm15.382-2l-2-4H7.618l-2 4ZM8 13h.01a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m8 0h.01a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.k7hb8xbye {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 18v-8c0-.155.036-.308.106-.447l3-6A1 1 0 0 1 7 3h10c.379 0 .725.214.894.553l3 6c.07.139.106.292.106.447v8a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H9v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1m15.382-9l-2-4H7.618l-2 4Z");
}
</style><g class="cuyn6tgcc"><path class="k7hb8xbye"/><path class="az2emlout"/></g>`,
		"fallback": "coolicons:car-bulk-sharp",
	});
}

export default Component;
