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
		"content": `<style>.f7jfp7y4n {
  fill: currentColor;
  d: path("M13.293 5.25c.63-.63 1.707-.184 1.707.707V13.5a1.5 1.5 0 0 1-1.5 1.5H5.957c-.89 0-1.337-1.077-.707-1.707zm.707.707L5.957 14H13.5a.5.5 0 0 0 .5-.5z");
}
</style><path class="f7jfp7y4n"/>`,
		"fallback": "fluent:caret-down-left-20-regular",
	});
}

export default Component;
