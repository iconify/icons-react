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
		"content": `<style>.wapoheu1s {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h6.75v5h-9zm0 4.25h9v12.5H6.75a2.25 2.25 0 0 1-2.25-2.25zM15 23.5V18h8.5v3.25a2.25 2.25 0 0 1-2.25 2.25zm8.5-7H15v-12h6.25a2.25 2.25 0 0 1 2.25 2.25z");
}
</style><path class="wapoheu1s"/>`,
		"fallback": "fluent:board-28-regular",
	});
}

export default Component;
