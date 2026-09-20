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
		"content": `<style>.kgelcxtak {
  fill: currentColor;
  d: path("M4 14V4h7v2H6v2h5v6zm2-2h3v-2H6zm7 2V4h7v10zm2-2h3V6h-3zM3 22v-5h2v5zm4 0v-5h2v5zm4 0v-5h2v5zm4 0v-5h6v5z");
}
</style><path class="kgelcxtak"/>`,
		"fallback": "material-symbols:60fps-select-outline-sharp",
	});
}

export default Component;
