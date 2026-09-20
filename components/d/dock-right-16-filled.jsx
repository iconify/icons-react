import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t-2zz6ecl {
  fill: currentColor;
  d: path("M11.5 3A2.5 2.5 0 0 1 14 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 10.5v-5A2.5 2.5 0 0 1 4.5 3zM9 4H4.5A1.5 1.5 0 0 0 3 5.5v5A1.5 1.5 0 0 0 4.5 12H9z");
}
</style><path class="t-2zz6ecl"/>`,
		"fallback": "fluent:dock-right-16-filled",
	});
}

export default Component;
