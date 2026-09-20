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
		"content": `<style>.p6go3_bby {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-56 104H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16");
}
</style><path class="p6go3_bby"/>`,
		"fallback": "ph:chat-centered-text-fill",
	});
}

export default Component;
