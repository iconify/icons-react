import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.km0upp_1h {
  fill: currentColor;
  d: path("M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zm5.586 7.879l1.268 1.267a.5.5 0 0 1-.708.708l-1.267-1.268a2.5 2.5 0 1 1 .707-.707M8 8.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0");
}
</style><path class="km0upp_1h"/>`,
		"fallback": "fluent:book-search-20-filled",
	});
}

export default Component;
