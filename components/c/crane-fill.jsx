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
		"content": `<style>.ww9m8rb-p {
  fill: currentColor;
  d: path("M228.12 17.14a8 8 0 0 0-7.88-.2L102 80H32a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h88a16 16 0 0 0 16-16v-32a7 7 0 0 0-.08-1.05v-.24a10 10 0 0 0-.22-1a.1.1 0 0 0 0-.05v-.07L113.54 92L216 37.33V160h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V24a8 8 0 0 0-3.88-6.86M48 96v64H32V96ZM32 200v-24h88v24Z");
}
</style><path class="ww9m8rb-p"/>`,
		"fallback": "ph:crane-fill",
	});
}

export default Component;
