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
		"content": `<style>.fi92mggmg {
  fill: currentColor;
  d: path("M15 5a5 5 0 0 1 5 5v5.171a3 3 0 1 1-2 0V10a3 3 0 0 0-3-3h-1.586l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L13.414 5ZM6 8.829v6.342a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2 0");
}
</style><path class="fi92mggmg"/>`,
		"fallback": "coolicons:git-pull-request-fill-round",
	});
}

export default Component;
