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
		"content": `<style>.kkn4rjbfi {
  fill: currentColor;
  d: path("M248 164h-60V92h60a4 4 0 0 0 0-8h-60.7a12 12 0 0 0-11.3-8h-64a12 12 0 0 0-11.3 8H60v-4a4 4 0 0 0-8 0v4H8a4 4 0 0 0 0 8h44v72H8a4 4 0 0 0 0 8h44v4a4 4 0 0 0 8 0v-4h40.7a12 12 0 0 0 11.3 8h64a12 12 0 0 0 11.3-8H248a4 4 0 0 0 0-8M60 92h40v72H60Zm116 80h-64a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v36h-36a4 4 0 0 0 0 8h36v36a4 4 0 0 1-4 4");
}
</style><path class="kkn4rjbfi"/>`,
		"fallback": "ph:belt-thin",
	});
}

export default Component;
