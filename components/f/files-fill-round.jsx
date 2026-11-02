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
		"content": `<style>.dy5i8ob_k {
  fill: currentColor;
  d: path("m16.707 2.293l5 5A1 1 0 0 1 22 8v6c0 1.33-.522 2.597-1.464 3.536A5 5 0 0 1 17 19a1 1 0 0 1 0-2a3 3 0 0 0 3-3V9h-3a2 2 0 0 1-2-2V4h-4a1 1 0 0 1 0-2h5c.265 0 .52.105.707.293m-3 8A1 1 0 0 1 14 11v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-7a5 5 0 0 1 5-5h1c.265 0 .52.105.707.293ZM17 5.414V7h1.586ZM8 10a1 1 0 0 0 1 1h3L8 7Z");
}
</style><path class="dy5i8ob_k"/>`,
		"fallback": "coolicons:files-fill-round",
	});
}

export default Component;
