import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yf5xu1bws {
  fill: currentColor;
  d: path("M7.5 2a.5.5 0 0 0 0 1h4.793l-2.147 2.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5zm1.354 5.854a.5.5 0 1 0-.708-.708l-2 2a.5.5 0 1 0 .708.708zm-4 4a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 .708.708z");
}
</style><path class="yf5xu1bws"/>`,
		"fallback": "fluent:arrow-up-right-dashes-16-regular",
	});
}

export default Component;
