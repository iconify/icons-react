import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wj4qiibhu {
  fill: currentColor;
  d: path("M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0M6.146 7.854a.5.5 0 1 0 .708-.708L5.707 6l1.147-1.146a.5.5 0 1 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708z");
}
</style><path class="wj4qiibhu"/>`,
		"fallback": "fluent:chevron-circle-left-12-filled",
	});
}

export default Component;
