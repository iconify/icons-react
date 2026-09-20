import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gzo2nqhlf {
  fill: currentColor;
  d: path("M14 12a4 4 0 0 0-4 4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm4-14a4 4 0 0 0-4 4v.832A10 10 0 0 0 6 16v9a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-9c0-4.1-2.468-7.625-6-9.168V6a4 4 0 0 0-4-4m8 18H8v-4a8 8 0 1 1 16 0zm-12 5a1 1 0 1 0 2 0v-3h10v3a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3v-3h4zm4-19q-1.03.002-2 .2V6a2 2 0 1 1 4 0v.2q-.97-.198-2-.2");
}
</style><path class="gzo2nqhlf"/>`,
		"fallback": "fluent:backpack-32-regular",
	});
}

export default Component;
