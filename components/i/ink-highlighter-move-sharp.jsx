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
		"content": `<style>.m7rinpbbf {
  fill: currentColor;
  d: path("m2.5 21l3.15-3.15l-.75-.75v-1.4l5.7-5.7l5.4 5.4l-5.7 5.7H8.9l-.75-.75l-.65.65zm9.525-12.425L18.4 2.2l5.4 5.4l-6.375 6.375zM13.775 4H7V2h8.775zm-4 4H4V6h7.775zm-4 4H1v-2h6.775z");
}
</style><path class="m7rinpbbf"/>`,
		"fallback": "material-symbols:ink-highlighter-move-sharp",
	});
}

export default Component;
