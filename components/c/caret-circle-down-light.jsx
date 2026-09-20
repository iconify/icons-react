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
		"content": `<style>.vkp7yzbjl {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m44.24-110.24a6 6 0 0 1 0 8.48l-40 40a6 6 0 0 1-8.48 0l-40-40a6 6 0 0 1 8.48-8.48L128 143.51l35.76-35.75a6 6 0 0 1 8.48 0");
}
</style><path class="vkp7yzbjl"/>`,
		"fallback": "ph:caret-circle-down-light",
	});
}

export default Component;
