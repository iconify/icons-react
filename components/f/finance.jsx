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
		"content": `<style>.j4yl9gozc {
  fill: currentColor;
  d: path("M5.116 20q-.691 0-1.153-.462T3.5 18.384V3h1v15.385q0 .23.192.423t.423.192H20.5v1zm2.269-3.5V9.192h2V16.5zm4.5 0V4.192h2V16.5zm4.5 0v-3.308h2V16.5z");
}
</style><path class="j4yl9gozc"/>`,
		"fallback": "material-symbols-light:finance",
	});
}

export default Component;
