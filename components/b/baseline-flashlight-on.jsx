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
		"content": `<style>.yoa0k4bjz {
  fill: currentColor;
  d: path("M6 2h12v3H6zm0 5v1l2 3v11h8V11l2-3V7zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5");
}
</style><path class="yoa0k4bjz"/>`,
		"fallback": "ic:baseline-flashlight-on",
	});
}

export default Component;
