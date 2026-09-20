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
		"content": `<style>.slnk4abyj {
  fill: currentColor;
  d: path("M98 72a6 6 0 0 1 6-6a102.12 102.12 0 0 1 102 102a6 6 0 0 1-12 0a90.1 90.1 0 0 0-90-90a6 6 0 0 1-6-6m142 122H78V32a6 6 0 0 0-12 0v34H32a6 6 0 0 0 0 12h34v122a6 6 0 0 0 6 6h168a6 6 0 0 0 0-12");
}
</style><path class="slnk4abyj"/>`,
		"fallback": "ph:angle-light",
	});
}

export default Component;
