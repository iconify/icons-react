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
		"content": `<style>.np45m775e {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm9.354 2.354a.5.5 0 0 0-.708-.708L9 11.293L7.354 9.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0z");
}
</style><path class="np45m775e"/>`,
		"fallback": "fluent:checkmark-square-20-regular",
	});
}

export default Component;
