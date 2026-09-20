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
		"content": `<style>.kwlbwwbsv {
  fill: currentColor;
  d: path("M14 3.25a.75.75 0 0 1 .75.75v9.25H24a.75.75 0 0 1 0 1.5h-9.25V24a.75.75 0 0 1-1.5 0v-9.25H4a.75.75 0 0 1 0-1.5h9.25V4a.75.75 0 0 1 .75-.75");
}
</style><path class="kwlbwwbsv"/>`,
		"fallback": "fluent:add-28-regular",
	});
}

export default Component;
