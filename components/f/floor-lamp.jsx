import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rd2tm4baz {
  fill: currentColor;
  d: path("M11 19v-8H6q-.5 0-.8-.4t-.15-.9L7 3.4q.2-.625.725-1.013T8.9 2h6.2q.65 0 1.175.388T17 3.4l1.95 6.3q.15.5-.15.9t-.8.4h-5v8zm-3 3v-2h8v2z");
}
</style><path class="rd2tm4baz"/>`,
		"fallback": "material-symbols:floor-lamp",
	});
}

export default Component;
