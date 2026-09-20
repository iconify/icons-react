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
		"content": `<style>.ulvs7rdeu {
  fill: currentColor;
  d: path("M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66");
}
</style><path class="ulvs7rdeu"/>`,
		"fallback": "ph:arrow-up-thin",
	});
}

export default Component;
