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
		"content": `<style>.gwi_gpb9j {
  fill: currentColor;
  d: path("M25 9.5v5A7.5 7.5 0 0 0 14.5 25H6.25A3.25 3.25 0 0 1 3 21.75V9.5zM21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3zM20.5 27a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m-.902-9.404l4.032 2.275a.72.72 0 0 1 0 1.258l-4.032 2.274c-.49.277-1.098-.072-1.098-.629v-4.548c0-.557.609-.905 1.098-.63");
}
</style><path class="gwi_gpb9j"/>`,
		"fallback": "fluent:calendar-play-28-filled",
	});
}

export default Component;
