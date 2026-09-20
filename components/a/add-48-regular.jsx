import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j4ghm3bvf {
  fill: currentColor;
  d: path("M24 5.25c.69 0 1.25.56 1.25 1.25v16.25H41.5a1.25 1.25 0 1 1 0 2.5H25.25V41.5a1.25 1.25 0 1 1-2.5 0V25.25H6.5a1.25 1.25 0 1 1 0-2.5h16.25V6.5c0-.69.56-1.25 1.25-1.25");
}
</style><path class="j4ghm3bvf"/>`,
		"fallback": "fluent:add-48-regular",
	});
}

export default Component;
