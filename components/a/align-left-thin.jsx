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
		"content": `<style>.wysx9ttmj {
  fill: currentColor;
  d: path("M44 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0m24 64V64a12 12 0 0 1 12-12h96a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4Zm152 48v40a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h136a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h136a4 4 0 0 0 4-4Z");
}
</style><path class="wysx9ttmj"/>`,
		"fallback": "ph:align-left-thin",
	});
}

export default Component;
