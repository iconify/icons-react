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
		"content": `<style>.vspx9_blv {
  fill: currentColor;
  d: path("M204.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L128.49 128ZM48.49 128l75.75-75.76a6 6 0 0 0-8.48-8.48l-80 80a6 6 0 0 0 0 8.48l80 80a6 6 0 1 0 8.48-8.48Z");
}
</style><path class="vspx9_blv"/>`,
		"fallback": "ph:caret-double-left-light",
	});
}

export default Component;
