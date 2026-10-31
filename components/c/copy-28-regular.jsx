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
		"content": `<style>.zkm_5ybpm {
  fill: currentColor;
  d: path("M10 9.5H5.75a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25V21H17v1.25A3.75 3.75 0 0 1 13.25 26h-7.5A3.75 3.75 0 0 1 2 22.25v-10.5A3.75 3.75 0 0 1 5.75 8H10zM22.25 2A3.75 3.75 0 0 1 26 5.75v10.5A3.75 3.75 0 0 1 22.25 20h-7.5A3.75 3.75 0 0 1 11 16.25V5.75A3.75 3.75 0 0 1 14.75 2zm-7.5 1.5a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25V5.75a2.25 2.25 0 0 0-2.25-2.25z");
}
</style><path class="zkm_5ybpm"/>`,
		"fallback": "fluent:copy-28-regular",
	});
}

export default Component;
