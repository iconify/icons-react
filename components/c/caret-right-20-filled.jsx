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
		"content": `<style>.ydqfpzbil {
  fill: currentColor;
  d: path("M7 14.204a1 1 0 0 0 1.628.778l4.723-3.815a1.5 1.5 0 0 0 0-2.334L8.628 5.02A1 1 0 0 0 7 5.797z");
}
</style><path class="ydqfpzbil"/>`,
		"fallback": "fluent:caret-right-20-filled",
	});
}

export default Component;
