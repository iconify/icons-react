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
		"content": `<style>.lqybegb6i {
  fill: currentColor;
  d: path("M8.379 5.5H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.09 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1M15.986 4h1.764A2.25 2.25 0 0 1 20 6.25v13.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5a2.25 2.25 0 0 1 2.236 2M9.5 4.25c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75");
}
</style><path class="lqybegb6i"/>`,
		"fallback": "fluent:clipboard-24-regular",
	});
}

export default Component;
