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
		"content": `<style>.r-og7l1mc {
  fill: currentColor;
  d: path("M2.954 16.131A9.946 9.946 0 0 1 19.032 4.968A9.945 9.945 0 0 1 7.869 21.046l-4.673.935a1 1 0 0 1-1.177-1.177ZM10 9H8a1 1 0 0 0 0 2h1v.586l-1.707 1.707a.999.999 0 1 0 1.414 1.414l2-2A1 1 0 0 0 11 12v-2a1 1 0 0 0-1-1m6 0h-2a1 1 0 0 0 0 2h1v.586l-1.707 1.707a.999.999 0 1 0 1.414 1.414l2-2A1 1 0 0 0 17 12v-2a1 1 0 0 0-1-1");
}
</style><path class="r-og7l1mc"/>`,
		"fallback": "coolicons:chat-circle-quote-fill",
	});
}

export default Component;
