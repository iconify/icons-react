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
		"content": `<style>.wggz6tmor {
  fill: currentColor;
  d: path("M222 128a6 6 0 0 1-3.43 5.42l-152 72a6 6 0 1 1-5.14-10.84L202 128L61.43 61.42a6 6 0 1 1 5.14-10.84l152 72A6 6 0 0 1 222 128");
}
</style><path class="wggz6tmor"/>`,
		"fallback": "ph:greater-than-light",
	});
}

export default Component;
