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
		"content": `<style>.drf1zyb0c {
  fill: currentColor;
  d: path("M4 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2M15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10zM9.455 6.293a.5.5 0 0 0-.902-.017L7.19 9H6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .447-.276L8.98 7.66l2.066 4.546a.5.5 0 0 0 .884.05L13.283 10h.217a.5.5 0 0 0 0-1H13a.5.5 0 0 0-.429.243l-1.01 1.683z");
}
</style><path class="drf1zyb0c"/>`,
		"fallback": "fluent:book-pulse-20-regular",
	});
}

export default Component;
