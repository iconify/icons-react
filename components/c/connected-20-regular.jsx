import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uan2h1lur {
  fill: currentColor;
  d: path("M5.879 6.586a2.5 2.5 0 1 1 .707-.707L8.62 7.914A2.5 2.5 0 0 1 9.999 7.5c.51 0 .983.152 1.379.414l2.035-2.035a2.5 2.5 0 1 1 .707.707L12.086 8.62c.262.396.414.87.414 1.379c0 .51-.152.983-.414 1.379l2.035 2.035a2.5 2.5 0 1 1-.707.707l-2.035-2.035a2.5 2.5 0 0 1-1.379.414c-.51 0-.983-.152-1.379-.414L6.586 14.12a2.5 2.5 0 1 1-.707-.707l2.035-2.035A2.5 2.5 0 0 1 7.5 10c0-.51.152-.983.414-1.379zM6 4.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m11 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M4.5 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M17 15.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M11.5 10a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0");
}
</style><path class="uan2h1lur"/>`,
		"fallback": "fluent:connected-20-regular",
	});
}

export default Component;
