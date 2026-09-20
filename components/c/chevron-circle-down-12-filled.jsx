import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jz0rk-bsh {
  fill: currentColor;
  d: path("M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1m1.854 4.854a.5.5 0 1 0-.708-.708L6 6.293L4.854 5.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z");
}
</style><path class="jz0rk-bsh"/>`,
		"fallback": "fluent:chevron-circle-down-12-filled",
	});
}

export default Component;
