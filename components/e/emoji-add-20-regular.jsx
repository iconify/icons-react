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
		"content": `<style>.akvxm3bxx {
  fill: currentColor;
  d: path("M17 9a8 8 0 1 0-7.411 7.979a5.5 5.5 0 0 1-.383-.982L9 16a7 7 0 1 1 6.997-6.794q.514.146.982.383A8 8 0 0 0 17 9m-7.978 5q.047-.518.186-1.005a3.99 3.99 0 0 1-3.32-1.48a.5.5 0 1 0-.777.629A5 5 0 0 0 9 14zM12.5 7.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-5 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="akvxm3bxx"/>`,
		"fallback": "fluent:emoji-add-20-regular",
	});
}

export default Component;
