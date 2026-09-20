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
		"content": `<style>.tj36kntje {
  fill: currentColor;
  d: path("M15 5.957c0-.89-1.077-1.337-1.707-.707L5.25 13.293c-.63.63-.184 1.707.707 1.707H13.5a1.5 1.5 0 0 0 1.5-1.5z");
}
</style><path class="tj36kntje"/>`,
		"fallback": "fluent:caret-20-filled",
	});
}

export default Component;
