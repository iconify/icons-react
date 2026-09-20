import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gprginbax {
  fill: currentColor;
  d: path("M20.5 15c3.59 0 6.5 3.667 6.5 5.5S24.09 26 20.5 26S14 22.333 14 20.5s2.91-5.5 6.5-5.5m4.5.654C23.784 14.712 22.232 14 20.5 14c-2.136 0-3.998 1.083-5.294 2.346a8.8 8.8 0 0 0-1.572 2.042c-.37.676-.634 1.42-.634 2.112s.264 1.436.634 2.112A8.8 8.8 0 0 0 15.584 25H6.25A3.25 3.25 0 0 1 3 21.75V9.5h22zM20.5 17a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m0 1.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4M21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3z");
}
</style><path class="gprginbax"/>`,
		"fallback": "fluent:calendar-eye-28-filled",
	});
}

export default Component;
