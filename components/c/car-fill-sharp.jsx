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
		"content": `<style>.smw13vbgd {
  fill: currentColor;
  d: path("M3 9h.382l2.724-5.447A1 1 0 0 1 7 3h10c.379 0 .725.214.894.553L20.618 9H21a1 1 0 0 1 0 2v7a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H9v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 0-2m4.618-4l-2 4h12.764l-2-4ZM8 13a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm8.01 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="smw13vbgd"/>`,
		"fallback": "coolicons:car-fill-sharp",
	});
}

export default Component;
