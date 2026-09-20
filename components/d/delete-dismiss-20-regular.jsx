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
		"content": `<style>.m6vtrdj0d {
  fill: currentColor;
  d: path("M11.5 4a1.5 1.5 0 0 0-3 0zm-4 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-.485 4.196a5.5 5.5 0 0 0-.986-.176L15.44 5H4.561l1.18 10.23A2 2 0 0 0 7.728 17H9.6q.276.538.657 1H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5z");
}
</style><path class="m6vtrdj0d"/>`,
		"fallback": "fluent:delete-dismiss-20-regular",
	});
}

export default Component;
