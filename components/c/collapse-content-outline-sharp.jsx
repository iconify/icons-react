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
		"content": `<style>.wh8ry1bdn {
  fill: currentColor;
  d: path("M11 13v6H9v-4H5v-2zm4-8v4h4v2h-6V5z");
}
</style><path class="wh8ry1bdn"/>`,
		"fallback": "material-symbols:collapse-content-outline-sharp",
	});
}

export default Component;
