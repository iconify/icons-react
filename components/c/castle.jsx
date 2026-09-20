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
		"content": `<style>.rf_evq1ee {
  fill: currentColor;
  d: path("M1.5 20.5v-11h1v2h3v-8h1v2h3v-2h1v2h3v-2h1v2h3v-2h1v8h3v-2h1v11h-8V18q0-1.056-.722-1.778T12 15.5t-1.778.722T9.5 18v2.5zm8-9h1V9.308h-1zm4 0h1V9.308h-1z");
}
</style><path class="rf_evq1ee"/>`,
		"fallback": "material-symbols-light:castle",
	});
}

export default Component;
