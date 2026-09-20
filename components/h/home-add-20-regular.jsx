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
		"content": `<style>.glp_o3nys {
  fill: currentColor;
  d: path("M8.998 2.388a1.5 1.5 0 0 1 2.005 0l5.5 4.942A1.5 1.5 0 0 1 17 8.445V9.6a5.5 5.5 0 0 0-1-.393v-.762a.5.5 0 0 0-.166-.371l-5.5-4.942a.5.5 0 0 0-.668 0l-5.5 4.942A.5.5 0 0 0 4 8.445V15.5a.5.5 0 0 0 .5.5h4.707q.148.523.392 1H4.5A1.5 1.5 0 0 1 3 15.5V8.445c0-.425.18-.83.498-1.115zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="glp_o3nys"/>`,
		"fallback": "fluent:home-add-20-regular",
	});
}

export default Component;
