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
		"content": `<style>.m2z-e6iat {
  fill: currentColor;
  d: path("M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-72 96h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m72-56H32V64h192z");
}
</style><path class="m2z-e6iat"/>`,
		"fallback": "ph:archive-fill",
	});
}

export default Component;
