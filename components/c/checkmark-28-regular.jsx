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
		"content": `<style>.tptj_qrbo {
  fill: currentColor;
  d: path("M4.03 13.47a.75.75 0 0 0-1.06 1.06l7 7a.75.75 0 0 0 1.06 0l14-14a.75.75 0 0 0-1.06-1.06L10.5 19.94z");
}
</style><path class="tptj_qrbo"/>`,
		"fallback": "fluent:checkmark-28-regular",
	});
}

export default Component;
