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
		"content": `<style>.a6eb7sfjr {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-3.004-3.003a9.93 9.93 0 0 1-10.42 1.342l-4.673.935a1 1 0 0 1-1.177-1.177l.935-4.673a9.93 9.93 0 0 1 1.342-10.42L1.293 2.707a.999.999 0 1 1 1.414-1.414m6.212 3.384L7.417 3.175a9.945 9.945 0 0 1 13.408 13.408Z");
}
</style><path class="a6eb7sfjr"/>`,
		"fallback": "coolicons:chat-circle-off-fill-sharp",
	});
}

export default Component;
