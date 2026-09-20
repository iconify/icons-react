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
		"content": `<style>.x7y6rkbuk {
  fill: currentColor;
  d: path("M20.5 23.3L15.2 18H14v2h2v2H8v-2h2v-2H2V3.175h1.175v2.8L.7 3.5l1.4-1.4l19.8 19.8zm.2-5.45L5.85 3H22v14.85z");
}
</style><path class="x7y6rkbuk"/>`,
		"fallback": "material-symbols:desktop-access-disabled-sharp",
	});
}

export default Component;
