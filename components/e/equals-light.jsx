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
		"content": `<style>.t4lxztbub {
  fill: currentColor;
  d: path("M222 160a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M40 102h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12");
}
</style><path class="t4lxztbub"/>`,
		"fallback": "ph:equals-light",
	});
}

export default Component;
