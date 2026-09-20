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
		"content": `<style>.j_avhzrfo {
  fill: currentColor;
  d: path("M5.5 6.5a.5.5 0 0 0 1 0V2.707l1.146 1.147a.5.5 0 1 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L5.5 2.707zm2 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0");
}
</style><path class="j_avhzrfo"/>`,
		"fallback": "fluent:arrow-step-out-12-regular",
	});
}

export default Component;
