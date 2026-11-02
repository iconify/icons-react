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
		"content": `<style>.mm_nktmaw {
  fill: currentColor;
  d: path("m7.414 18l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1ZM12 8.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 10l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 11.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 10l1.293-1.293a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="mm_nktmaw"/>`,
		"fallback": "coolicons:chat-close-fill-sharp",
	});
}

export default Component;
