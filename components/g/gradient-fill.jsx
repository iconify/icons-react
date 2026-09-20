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
		"content": `<style>.m7r8pdbfo {
  fill: currentColor;
  d: path("M80 192a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m144-8h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m-72 0h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16M32 168h80a8 8 0 0 0 0-16H32a8 8 0 0 0 0 16m192-16h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16m0-96H32a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8m0 56H32a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8");
}
</style><path class="m7r8pdbfo"/>`,
		"fallback": "ph:gradient-fill",
	});
}

export default Component;
