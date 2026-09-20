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
		"content": `<style>.qohomvb5e {
  fill: currentColor;
  d: path("M11.197 2.44a1.5 1.5 0 0 1 2.121 0l4.243 4.242a1.5 1.5 0 0 1 0 2.121L9.364 17H14.5a.5.5 0 1 1 0 1H7.82a1.5 1.5 0 0 1-1.14-.437L2.437 13.32a1.5 1.5 0 0 1 0-2.121zM9.781 15.168l-4.95-4.95l-1.687 1.687a.5.5 0 0 0 0 .707l4.243 4.243a.5.5 0 0 0 .707 0z");
}
</style><path class="qohomvb5e"/>`,
		"fallback": "fluent:eraser-20-filled",
	});
}

export default Component;
