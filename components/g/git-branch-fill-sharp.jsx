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
		"content": `<style>.b_-wxsbgx {
  fill: currentColor;
  d: path("M6 8.829V11h12V8.829a3 3 0 1 1 2 0V12a1 1 0 0 1-1 1H6v2.171a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2 0");
}
</style><path class="b_-wxsbgx"/>`,
		"fallback": "coolicons:git-branch-fill-sharp",
	});
}

export default Component;
