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
		"content": `<style>.y9jzfccuv {
  fill: currentColor;
  d: path("m7.414 18l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1ZM9 9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z");
}
</style><path class="y9jzfccuv"/>`,
		"fallback": "coolicons:chat-minus-fill-sharp",
	});
}

export default Component;
