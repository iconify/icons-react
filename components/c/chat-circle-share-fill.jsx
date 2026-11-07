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
		"content": `<style>.t-ydcab_t {
  fill: currentColor;
  d: path("M2.954 16.131A9.946 9.946 0 0 1 19.032 4.968A9.945 9.945 0 0 1 7.869 21.046l-4.673.935a1 1 0 0 1-1.177-1.177Zm13.753-4.838l-3-3a.999.999 0 1 0-1.414 1.414L13.586 11H10a3 3 0 0 0-3 3v1a1 1 0 0 0 2 0v-1a.997.997 0 0 1 1-1h3.586l-1.293 1.293a.999.999 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414");
}
</style><path class="t-ydcab_t"/>`,
		"fallback": "coolicons:chat-circle-share-fill",
	});
}

export default Component;
