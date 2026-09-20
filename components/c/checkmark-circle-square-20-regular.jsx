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
		"content": `<style>.ljh6l0b9d {
  fill: currentColor;
  d: path("M12 7A5 5 0 1 0 2 7a5 5 0 0 0 10 0m1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0m-5 9v-2.07a7 7 0 0 0 1-.22V16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2.29q.145-.486.22-1H16a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3M9.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L6.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0m3.5 10.208l3-3a.5.5 0 0 0-.708-.708L13 14.293l-1.146-1.147a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0");
}
</style><path class="ljh6l0b9d"/>`,
		"fallback": "fluent:checkmark-circle-square-20-regular",
	});
}

export default Component;
