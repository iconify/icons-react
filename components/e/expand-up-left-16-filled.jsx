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
		"content": `<style>.i71roxbmn {
  fill: currentColor;
  d: path("M7.23 2.5a.5.5 0 0 0-.5-.5H2.5a.5.5 0 0 0-.5.5v4.23a.5.5 0 0 0 1 0V3.708l3.377 3.377a.5.5 0 1 0 .707-.707L3.707 3H6.73a.5.5 0 0 0 .5-.5m4.27.5A1.5 1.5 0 0 1 13 4.5V8H9.769a1.77 1.77 0 0 0-1.77 1.77V13H4.5A1.5 1.5 0 0 1 3 11.5V9.27a.5.5 0 0 0-1 0v2.23A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2H9.27a.5.5 0 0 0 0 1z");
}
</style><path class="i71roxbmn"/>`,
		"fallback": "fluent:expand-up-left-16-filled",
	});
}

export default Component;
