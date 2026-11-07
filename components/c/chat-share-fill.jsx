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
		"content": `<style>.fvuff8rwg {
  fill: currentColor;
  d: path("m6.707 18.707l-2 2a1.36 1.36 0 0 1-1.186.382C2.572 20.928 2 19.898 2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H8c-.468 0-.98.395-1.293.707m10-9.414l-3-3a.999.999 0 1 0-1.414 1.414L13.586 9H10a3 3 0 0 0-3 3v1a1 1 0 0 0 2 0v-1a.997.997 0 0 1 1-1h3.586l-1.293 1.293a.999.999 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414");
}
</style><path class="fvuff8rwg"/>`,
		"fallback": "coolicons:chat-share-fill",
	});
}

export default Component;
