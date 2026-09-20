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
		"content": `<style>.zhg0dv4qn {
  fill: currentColor;
  d: path("M8 20v-4H4v-2h4v-4H4V8h4V4h2v4h4V4h2v4h4v2h-4v4h4v2h-4v4h-2v-4h-4v4zm2-6h4v-4h-4z");
}
</style><path class="zhg0dv4qn"/>`,
		"fallback": "material-symbols:grid-3x3-outline-sharp",
	});
}

export default Component;
