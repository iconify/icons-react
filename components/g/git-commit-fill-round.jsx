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
		"content": `<style>.bnay0bb6i {
  fill: currentColor;
  d: path("M9.171 13H3a1 1 0 0 1 0-2h6.171a3 3 0 0 1 5.658 0H21a1 1 0 0 1 0 2h-6.171a3 3 0 0 1-5.658 0");
}
</style><path class="bnay0bb6i"/>`,
		"fallback": "coolicons:git-commit-fill-round",
	});
}

export default Component;
