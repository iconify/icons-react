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
		"content": `<style>.lzw5ddb4k {
  fill: currentColor;
  d: path("M6 8.829v2.342A3 3 0 0 1 7 11h10a1 1 0 0 0 1-1V8.829a3 3 0 1 1 2 0V10a3 3 0 0 1-3 3H7a.997.997 0 0 0-1 1v1.171a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2 0");
}
</style><path class="lzw5ddb4k"/>`,
		"fallback": "coolicons:git-branch-fill",
	});
}

export default Component;
