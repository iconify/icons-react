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
		"content": `<style>.yg9vbab_s {
  fill: currentColor;
  d: path("M14 2a.75.75 0 0 1 .75.75v22.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 14 2M8.75 6a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 8.75 6m10.5 0a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V6.75a.75.75 0 0 1 .75-.75m-15.5 4a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75m20.5 0a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75");
}
</style><path class="yg9vbab_s"/>`,
		"fallback": "fluent:device-eq-28-regular",
	});
}

export default Component;
