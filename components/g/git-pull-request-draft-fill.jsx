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
		"content": `<style>.wx2kf4bcr {
  fill: currentColor;
  d: path("M6 8.829v6.342a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2 0M19.01 5a1 1 0 0 1 0 2H19a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H19a1 1 0 0 1 0-2ZM16 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><path class="wx2kf4bcr"/>`,
		"fallback": "coolicons:git-pull-request-draft-fill",
	});
}

export default Component;
