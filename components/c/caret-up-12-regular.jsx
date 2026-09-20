import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yij-yizja {
  fill: currentColor;
  d: path("M3.076 7.383A1 1 0 0 0 4 8h4a1 1 0 0 0 .707-1.707l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0-.217 1.09M4 7l1.823-1.823a.25.25 0 0 1 .354 0L8 7z");
}
</style><path class="yij-yizja"/>`,
		"fallback": "fluent:caret-up-12-regular",
	});
}

export default Component;
