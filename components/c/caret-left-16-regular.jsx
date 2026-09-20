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
		"content": `<style>.e3zuahu5s {
  fill: currentColor;
  d: path("M9.429 11.864a1 1 0 0 0 1.57-.821V4.957a1 1 0 0 0-1.57-.821L5.644 6.769a1.5 1.5 0 0 0 0 2.462zm.57-.821L6.216 8.41a.5.5 0 0 1 0-.82L10 4.956z");
}
</style><path class="e3zuahu5s"/>`,
		"fallback": "fluent:caret-left-16-regular",
	});
}

export default Component;
