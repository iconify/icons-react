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
		"content": `<style>.exe9ljbqw {
  fill: currentColor;
  d: path("m4.414 2l18.293 18.293a.999.999 0 1 1-1.414 1.414L17.586 18H7.414l-3.707 3.707A1 1 0 0 1 2 21V3c0-.176.046-.348.134-.5a1 1 0 0 1 1.573-1.207ZM22 16.757L7.243 2H21a1 1 0 0 1 1 1Z");
}
</style><path class="exe9ljbqw"/>`,
		"fallback": "coolicons:chat-off-fill-sharp",
	});
}

export default Component;
