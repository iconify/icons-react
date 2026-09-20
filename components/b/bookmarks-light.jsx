import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d4zp-pb-w {
  fill: currentColor;
  d: path("M192 26H96a14 14 0 0 0-14 14v18H64a14 14 0 0 0-14 14v152a6 6 0 0 0 9.49 4.88L112 191.37l52.52 37.51A6 6 0 0 0 174 224v-43.2l22.51 16.08A6 6 0 0 0 206 192V40a14 14 0 0 0-14-14m-30 186.34l-46.52-33.22a6 6 0 0 0-7 0L62 212.34V72a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2Zm32-32l-20-14.28V72a14 14 0 0 0-14-14H94V40a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2Z");
}
</style><path class="d4zp-pb-w"/>`,
		"fallback": "ph:bookmarks-light",
	});
}

export default Component;
