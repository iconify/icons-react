import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yyjdrkacy {
  d: path("M216.008 68H172V56a20.022 20.022 0 0 0-20-20h-48a20.022 20.022 0 0 0-20 20v12H40.008a12.013 12.013 0 0 0-12 12v128a12.013 12.013 0 0 0 12 12h176a12.013 12.013 0 0 0 12-12V80a12.013 12.013 0 0 0-12-12zM92 56a12.013 12.013 0 0 1 12-12h48a12.013 12.013 0 0 1 12 12v12H92zm128.008 152a4.004 4.004 0 0 1-4 4h-176a4.004 4.004 0 0 1-4-4V80a4.004 4.004 0 0 1 4-4h176a4.004 4.004 0 0 1 4 4z");
  fill: currentColor;
}
</style><path class="yyjdrkacy"/>`,
		"fallback": "ph:briefcase-simple-thin",
	});
}

export default Component;
