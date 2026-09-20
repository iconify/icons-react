import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m9jw48y1a {
  fill: currentColor;
  d: path("M16 14c3.256 0 6.3-.596 8.606-1.644c.823-.374 1.668-.865 2.394-1.48V25c0 2.761-4.925 5-11 5S5 27.761 5 25V10.876c.726.615 1.571 1.106 2.394 1.48C9.7 13.404 12.744 14 16 14M5 7c0-2.761 4.925-5 11-5s11 2.239 11 5s-4.925 5-11 5S5 9.761 5 7");
}
</style><path class="m9jw48y1a"/>`,
		"fallback": "fluent:database-32-filled",
	});
}

export default Component;
