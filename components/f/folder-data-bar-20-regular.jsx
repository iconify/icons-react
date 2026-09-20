import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rv2ydnbjz {
  fill: currentColor;
  d: path("M12 14a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m3-4a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1m3 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M6.982 3c.464 0 .91.185 1.238.513L9.707 5H15.5A2.5 2.5 0 0 1 18 7.5V11c-.365 0-.706.1-1 .27V7.5A1.5 1.5 0 0 0 15.5 6H9.707l-1.56 1.56A1.5 1.5 0 0 1 7.085 8H3v6.5A1.5 1.5 0 0 0 4.5 16H10v1H4.5A2.5 2.5 0 0 1 2 14.5v-9A2.5 2.5 0 0 1 4.5 3zM4.5 4A1.5 1.5 0 0 0 3 5.5V7h4.086a.5.5 0 0 0 .353-.146L8.793 5.5l-1.28-1.28a.75.75 0 0 0-.53-.22z");
}
</style><path class="rv2ydnbjz"/>`,
		"fallback": "fluent:folder-data-bar-20-regular",
	});
}

export default Component;
