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
		"content": `<style>.umw5q27as {
  fill: currentColor;
  d: path("M156 56H60a20 20 0 0 0-20 20v152a12 12 0 0 0 19 9.76l49-35l49 35a12 12 0 0 0 19-9.76V76a20 20 0 0 0-20-20m-4 148.68l-37-26.45a12 12 0 0 0-14 0l-37 26.45V80h88ZM216 36v152a12 12 0 0 1-24 0V40H92a12 12 0 0 1 0-24h104a20 20 0 0 1 20 20");
}
</style><path class="umw5q27as"/>`,
		"fallback": "ph:bookmarks-simple-bold",
	});
}

export default Component;
