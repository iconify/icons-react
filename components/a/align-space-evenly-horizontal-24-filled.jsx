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
		"content": `<style>.h7sqmebzw {
  fill: currentColor;
  d: path("M2 17.5A2.5 2.5 0 0 0 4.5 20h1A2.5 2.5 0 0 0 8 17.5v-11A2.5 2.5 0 0 0 5.5 4h-1A2.5 2.5 0 0 0 2 6.5zm7 0a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 12.5 4h-1A2.5 2.5 0 0 0 9 6.5zm7 0a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 19.5 4h-1A2.5 2.5 0 0 0 16 6.5z");
}
</style><path class="h7sqmebzw"/>`,
		"fallback": "fluent:align-space-evenly-horizontal-24-filled",
	});
}

export default Component;
