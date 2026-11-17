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
		"content": `<style>.mfhy2b_qt {
  fill: currentColor;
  d: path("M15.222 18H13v2h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7v-2H8.778a4 4 0 0 1-4-4V9.806c0-1.154.498-2.251 1.366-3.011l3.222-2.819a4 4 0 0 1 5.268 0l3.222 2.819a4 4 0 0 1 1.366 3.011V14a4 4 0 0 1-4 4");
}
</style><path class="mfhy2b_qt"/>`,
		"fallback": "coolicons:house-connection-fill-round",
	});
}

export default Component;
