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
		"content": `<style>.w32tozbuv {
  fill: currentColor;
  d: path("M18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0M3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0m10.5-1.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-5 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1.611 4.015a.5.5 0 1 0-.778.629A5 5 0 0 0 10 15c1.57 0 2.973-.725 3.889-1.856a.5.5 0 1 0-.778-.63A4 4 0 0 1 10 14a4 4 0 0 1-3.111-1.485");
}
</style><path class="w32tozbuv"/>`,
		"fallback": "fluent:emoji-20-regular",
	});
}

export default Component;
