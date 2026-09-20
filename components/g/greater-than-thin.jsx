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
		"content": `<style>.yck7wgd5o {
  fill: currentColor;
  d: path("M220 128a4 4 0 0 1-2.29 3.62l-152 72A3.85 3.85 0 0 1 64 204a4 4 0 0 1-1.71-7.62L206.66 128L62.29 59.62a4 4 0 0 1 3.42-7.23l152 72A4 4 0 0 1 220 128");
}
</style><path class="yck7wgd5o"/>`,
		"fallback": "ph:greater-than-thin",
	});
}

export default Component;
