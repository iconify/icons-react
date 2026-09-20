import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x0pdambxs {
  fill: currentColor;
  d: path("M240 80H108.94L87.16 36.42A8 8 0 0 0 80 32H48a8 8 0 0 0-8 8v40H24a8 8 0 0 0 0 16h16v112H24a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16h-16V96h96v88h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h16a8 8 0 0 0 0-16M56 48h19.06l16 32H56Zm0 160v-48h40v48Zm40-64H56V96h40Z");
}
</style><path class="x0pdambxs"/>`,
		"fallback": "ph:crane-tower",
	});
}

export default Component;
