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
		"content": `<style>.givlg7brg {
  fill: currentColor;
  d: path("M208 136h-32v-32h16a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h16v32H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h8v40a8 8 0 0 0 16 0v-40h112v40a8 8 0 0 0 16 0v-40h8a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16m-48 0H96v-32h64Z");
}
</style><path class="givlg7brg"/>`,
		"fallback": "ph:chair-fill",
	});
}

export default Component;
