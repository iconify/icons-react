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
		"content": `<style>.a68ntbcvy {
  fill: currentColor;
  d: path("M24 180h208a4 4 0 0 0 0-8h-12v-20a92.11 92.11 0 0 0-88-91.91V36h20a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8h20v24.09A92.11 92.11 0 0 0 36 152v20H24a4 4 0 0 0 0 8m20-28a84 84 0 0 1 168 0v20H44Zm192 56a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h208a4 4 0 0 1 4 4");
}
</style><path class="a68ntbcvy"/>`,
		"fallback": "ph:call-bell-thin",
	});
}

export default Component;
