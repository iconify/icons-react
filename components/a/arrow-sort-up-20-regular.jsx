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
		"content": `<style>.pszj-m7_y {
  fill: currentColor;
  d: path("M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.5.5 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0z");
}
</style><path class="pszj-m7_y"/>`,
		"fallback": "fluent:arrow-sort-up-20-regular",
	});
}

export default Component;
