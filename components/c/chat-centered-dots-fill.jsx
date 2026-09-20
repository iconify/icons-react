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
		"content": `<style>.mos4fcbxg {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M84 132a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="mos4fcbxg"/>`,
		"fallback": "ph:chat-centered-dots-fill",
	});
}

export default Component;
