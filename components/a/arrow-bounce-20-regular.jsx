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
		"content": `<style>.j25v431pr {
  fill: currentColor;
  d: path("M2.5 6a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0V7.707l7.146 7.147a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L10.5 13.793L3.707 7H9.5a.5.5 0 0 0 0-1z");
}
</style><path class="j25v431pr"/>`,
		"fallback": "fluent:arrow-bounce-20-regular",
	});
}

export default Component;
