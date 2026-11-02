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
		"content": `<style>.h7oac0bss {
  fill: currentColor;
  d: path("M2.954 16.131A9.946 9.946 0 0 1 19.032 4.968A9.945 9.945 0 0 1 7.869 21.046l-4.673.935a1 1 0 0 1-1.177-1.177ZM16 11H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2");
}
</style><path class="h7oac0bss"/>`,
		"fallback": "coolicons:chat-circle-minus-fill-sharp",
	});
}

export default Component;
