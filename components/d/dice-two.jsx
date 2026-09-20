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
		"content": `<style>.q9xlerb0x {
  fill: currentColor;
  d: path("M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-88-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="q9xlerb0x"/>`,
		"fallback": "ph:dice-two",
	});
}

export default Component;
