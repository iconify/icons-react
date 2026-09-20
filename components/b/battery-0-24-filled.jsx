import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gqtq57b9n {
  fill: currentColor;
  d: path("M2 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z");
}
</style><path class="gqtq57b9n"/>`,
		"fallback": "fluent:battery-0-24-filled",
	});
}

export default Component;
