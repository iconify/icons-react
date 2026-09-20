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
		"content": `<style>.tpqd89bnv {
  fill: currentColor;
  d: path("M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-96-92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-56 56a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="tpqd89bnv"/>`,
		"fallback": "ph:dice-four",
	});
}

export default Component;
