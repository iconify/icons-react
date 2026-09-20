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
		"content": `<style>.n0gygqnek {
  fill: currentColor;
  d: path("M1 20v-6h3v6zm4.75 0v-8h3v8zm4.75 0V9h3v11zm4.75 0V7h3v13zM20 20V4h3v16z");
}
</style><path class="n0gygqnek"/>`,
		"fallback": "material-symbols:android-cell-5-bar-outline-sharp",
	});
}

export default Component;
