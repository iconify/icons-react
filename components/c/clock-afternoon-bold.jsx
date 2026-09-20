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
		"content": `<style>.s6ao7ubvv {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m68-84a12 12 0 0 1-12 12h-27l19.52 19.51a12 12 0 0 1-17 17l-40-40A12 12 0 0 1 128 116h56a12 12 0 0 1 12 12");
}
</style><path class="s6ao7ubvv"/>`,
		"fallback": "ph:clock-afternoon-bold",
	});
}

export default Component;
