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
		"content": `<style>.ogb3bzttz {
  fill: currentColor;
  d: path("M12 19C17.5228 19 22 15.866 22 12C22 8.13401 17.5228 5 12 5C6.47715 5 2 8.13401 2 12C2 15.866 6.47715 19 12 19Z");
}
</style><path class="ogb3bzttz"/>`,
		"fallback": "solar:ellipse-bold",
	});
}

export default Component;
