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
		"content": `<style>.cqkpnybjk {
  fill: currentColor;
  d: path("M2.954 16.131A9.946 9.946 0 0 1 19.032 4.968A9.945 9.945 0 0 1 7.869 21.046l-4.673.935a1 1 0 0 1-1.177-1.177Zm9.953-1.81l2.386 2.386a.999.999 0 1 0 1.414-1.414l-2.386-2.386a3.83 3.83 0 1 0-1.414 1.414");
}
</style><path class="cqkpnybjk"/>`,
		"fallback": "coolicons:chat-circle-search-fill-sharp",
	});
}

export default Component;
