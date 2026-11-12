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
		"content": `<style>.cmvvffbow {
  fill: currentColor;
  d: path("M2.954 16.131A9.946 9.946 0 0 1 19.032 4.968A9.945 9.945 0 0 1 7.869 21.046l-4.673.935a1 1 0 0 1-1.177-1.177ZM9 8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm6 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-4.753 6.316a4.6 4.6 0 0 1-1.54-1.023a.999.999 0 1 0-1.414 1.414a6.6 6.6 0 0 0 2.203 1.462c.795.324 1.645.49 2.504.488a6.6 6.6 0 0 0 2.504-.488a6.6 6.6 0 0 0 2.203-1.462a.997.997 0 0 0 0-1.414a1 1 0 0 0-1.414 0a4.65 4.65 0 0 1-5.046 1.023");
}
</style><path class="cmvvffbow"/>`,
		"fallback": "coolicons:chat-circle-smile-fill-round",
	});
}

export default Component;
