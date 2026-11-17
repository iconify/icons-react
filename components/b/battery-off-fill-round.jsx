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
		"content": `<style>.mfcda9b4n {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-4.941-4.941A4 4 0 0 1 15 18H6a4 4 0 0 1-4-4v-4a4.01 4.01 0 0 1 2.776-3.809L1.293 2.707a.999.999 0 1 1 1.414-1.414M18.94 14.697L10.243 6H15a4 4 0 0 1 4 4v4q0 .352-.06.697M22 10v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}
</style><path class="mfcda9b4n"/>`,
		"fallback": "coolicons:battery-off-fill-round",
	});
}

export default Component;
