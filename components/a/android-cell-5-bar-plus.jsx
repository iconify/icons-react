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
		"content": `<style>.maohuhbkt {
  fill: currentColor;
  d: path("M1 20v-6h3v6zm4.75 0v-8h3v8zm4.75 0V9h3v11zM23 13q-.625-.475-1.388-.737T20 12V4h3zm-7.75-6h3v5.325q-1.075.4-1.862 1.2t-1.138 1.9zM19 20v-2h-2v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="maohuhbkt"/>`,
		"fallback": "material-symbols:android-cell-5-bar-plus",
	});
}

export default Component;
