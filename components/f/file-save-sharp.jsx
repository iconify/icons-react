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
		"content": `<style>.rkl2198iz {
  fill: currentColor;
  d: path("M14 24v-2h8v2zm4-3l-4-4l1.4-1.4l1.6 1.6v-4.175h2V17.2l1.6-1.6L22 17zM4 20V2h9l6 6v3.025h-7V20zm8-11h5l-5-5z");
}
</style><path class="rkl2198iz"/>`,
		"fallback": "material-symbols:file-save-sharp",
	});
}

export default Component;
