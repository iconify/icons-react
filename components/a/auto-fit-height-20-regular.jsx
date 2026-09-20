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
		"content": `<style>.ysrxrackg {
  fill: currentColor;
  d: path("M4 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 15a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM9.146 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L10 6.707v6.586l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L9 13.293V6.707L7.854 7.854a.5.5 0 1 1-.708-.708z");
}
</style><path class="ysrxrackg"/>`,
		"fallback": "fluent:auto-fit-height-20-regular",
	});
}

export default Component;
