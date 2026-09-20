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
		"content": `<style>.szsy4g-3y {
  fill: currentColor;
  d: path("M13 14.204a1 1 0 0 1-1.628.778l-4.723-3.815a1.5 1.5 0 0 1 0-2.334l4.723-3.814A1 1 0 0 1 13 5.797z");
}
</style><path class="szsy4g-3y"/>`,
		"fallback": "fluent:caret-left-20-filled",
	});
}

export default Component;
