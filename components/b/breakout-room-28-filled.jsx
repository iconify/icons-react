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
		"content": `<style>.x3h22xy2t {
  fill: currentColor;
  d: path("M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25h-6.826A5.23 5.23 0 0 0 16 21.25v-4c0-2.9-2.35-5.25-5.25-5.25h-4A5.23 5.23 0 0 0 3 13.576zm0 10.5v4A3.75 3.75 0 0 0 6.75 25h4a3.75 3.75 0 0 0 3.75-3.75v-4a3.75 3.75 0 0 0-3.75-3.75h-4A3.75 3.75 0 0 0 3 17.25");
}
</style><path class="x3h22xy2t"/>`,
		"fallback": "fluent:breakout-room-28-filled",
	});
}

export default Component;
