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
		"content": `<style>.gpnt34b1b {
  fill: currentColor;
  d: path("M10.27 12.54q.23-.23.23-.54t-.23-.54t-.54-.23t-.539.23t-.23.54t.23.54t.54.23t.54-.23m4.538 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.229.54t.23.54t.54.23t.539-.23M4.5 20v-1h1V4h6.116v15h.769V4H18.5v15h1v1z");
}
</style><path class="gpnt34b1b"/>`,
		"fallback": "material-symbols-light:door-sliding-sharp",
	});
}

export default Component;
