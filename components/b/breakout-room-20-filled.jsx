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
		"content": `<style>.cb48ujbge {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.354A4 4 0 0 0 12 14v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-3 1.354zm3 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z");
}
</style><path class="cb48ujbge"/>`,
		"fallback": "fluent:breakout-room-20-filled",
	});
}

export default Component;
