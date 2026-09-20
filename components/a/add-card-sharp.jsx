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
		"content": `<style>.undfsxbov {
  fill: currentColor;
  d: path("M4 12h16V8H4zm15 10v-3h-3v-2h3v-3h2v3h3v2h-3v3zM2 20V4h20v8h-3q-2.075 0-3.537 1.463T14 17v3z");
}
</style><path class="undfsxbov"/>`,
		"fallback": "material-symbols:add-card-sharp",
	});
}

export default Component;
