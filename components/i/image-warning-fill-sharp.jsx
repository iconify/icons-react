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
		"content": `<style>.c1ewcrota {
  fill: currentColor;
  d: path("m17.414 22l-9.707-9.707a1 1 0 0 0-1.414 0L2 16.586V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1ZM16 6a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm-.99 5H15a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M4 17.414l3-3L14.586 22H3a1 1 0 0 1-1-1v-1.586Z");
}
</style><path class="c1ewcrota"/>`,
		"fallback": "coolicons:image-warning-fill-sharp",
	});
}

export default Component;
