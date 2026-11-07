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
		"content": `<style>.ak5r4vsrj {
  fill: currentColor;
  d: path("M2.954 16.131A9.946 9.946 0 0 1 19.032 4.968A9.945 9.945 0 0 1 7.869 21.046l-4.673.935a1 1 0 0 1-1.177-1.177ZM8 9a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm5 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2");
}
</style><path class="ak5r4vsrj"/>`,
		"fallback": "coolicons:chat-circle-text-fill-sharp",
	});
}

export default Component;
