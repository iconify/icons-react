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
		"content": `<style>.lx3lnq-hu {
  fill: currentColor;
  d: path("M149.66 122.34a8 8 0 0 1 0 11.32l-80 80a8 8 0 0 1-11.32-11.32L132.69 128L58.34 53.66a8 8 0 0 1 11.32-11.32ZM184 40a8 8 0 0 0-8 8v160a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8");
}
</style><path class="lx3lnq-hu"/>`,
		"fallback": "ph:caret-line-right",
	});
}

export default Component;
