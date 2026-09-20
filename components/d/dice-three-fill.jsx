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
		"content": `<style>.y-xufnbip {
  fill: currentColor;
  d: path("M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32M92 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="y-xufnbip"/>`,
		"fallback": "ph:dice-three-fill",
	});
}

export default Component;
