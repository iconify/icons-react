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
		"content": `<style>.syb2ea1hm {
  fill: currentColor;
  d: path("M5 19v-2h14v2zm.35-4L12 5l6.65 10zm3.7-2h5.9L12 8.6z");
}
</style><path class="syb2ea1hm"/>`,
		"fallback": "material-symbols:eject-outline-sharp",
	});
}

export default Component;
