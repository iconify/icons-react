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
		"content": `<style>.h0woz3_-u {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 5.25a.749.749 0 1 0 0-1.5a.749.749 0 0 0 0 1.498m.5 1.25a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0z");
}
</style><path class="h0woz3_-u"/>`,
		"fallback": "fluent:info-16-filled",
	});
}

export default Component;
