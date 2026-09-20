import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cgjvkxegc {
  fill: currentColor;
  d: path("m21.193 4.131l1.498-1.517a1 1 0 0 1 1.42-.005l1.186 1.188a1 1 0 0 1 .005 1.41l-1.508 1.526zM20.139 5.2l-4.193 4.247l-.192-.192c-1.546-1.546-4.152-1.123-5.13.832l-.51 1.021a.916.916 0 0 1-.999.489l-.089-.018a5.6 5.6 0 0 0-5.582 2.133a7.22 7.22 0 0 0 .671 9.44l.734.733a7.22 7.22 0 0 0 9.44.67a5.6 5.6 0 0 0 2.132-5.581l-.017-.089a.916.916 0 0 1 .488-.998l1.021-.511c1.955-.978 2.378-3.584.833-5.13l-.2-.198L22.74 7.8zm-9.553 12.215a2 2 0 1 1 2.828-2.829a2 2 0 0 1-2.828 2.828");
}
</style><path class="cgjvkxegc"/>`,
		"fallback": "fluent:guitar-28-filled",
	});
}

export default Component;
