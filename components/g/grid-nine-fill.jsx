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
		"content": `<style>.cp-xgkbly {
  fill: currentColor;
  d: path("M84 52v40H28a4 4 0 0 1-4-4V64a16 16 0 0 1 16-16h40a4 4 0 0 1 4 4m16 152a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4v-40h-56Zm-76-36v24a16 16 0 0 0 16 16h40a4 4 0 0 0 4-4v-40H28a4 4 0 0 0-4 4m0-56v32a4 4 0 0 0 4 4h56v-40H28a4 4 0 0 0-4 4m128-64h-48a4 4 0 0 0-4 4v40h56V52a4 4 0 0 0-4-4m76 60h-56v40h56a4 4 0 0 0 4-4v-32a4 4 0 0 0-4-4m-128 40h56v-40h-56ZM216 48h-40a4 4 0 0 0-4 4v40h56a4 4 0 0 0 4-4V64a16 16 0 0 0-16-16m12 116h-56v40a4 4 0 0 0 4 4h40a16 16 0 0 0 16-16v-24a4 4 0 0 0-4-4");
}
</style><path class="cp-xgkbly"/>`,
		"fallback": "ph:grid-nine-fill",
	});
}

export default Component;
