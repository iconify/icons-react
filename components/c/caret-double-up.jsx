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
		"content": `<style>.f5eklw4pn {
  fill: currentColor;
  d: path("M213.66 194.34a8 8 0 0 1-11.32 11.32L128 131.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0Zm-160-68.68L128 51.31l74.34 74.35a8 8 0 0 0 11.32-11.32l-80-80a8 8 0 0 0-11.32 0l-80 80a8 8 0 0 0 11.32 11.32");
}
</style><path class="f5eklw4pn"/>`,
		"fallback": "ph:caret-double-up",
	});
}

export default Component;
