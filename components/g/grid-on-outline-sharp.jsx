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
		"content": `<style>.tft1gibsc {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h3.325v-3.325H5zm5.325 0h3.35v-3.325h-3.35zm5.35 0H19v-3.325h-3.325zM5 13.675h3.325v-3.35H5zm5.325 0h3.35v-3.35h-3.35zm5.35 0H19v-3.35h-3.325zM5 8.325h3.325V5H5zm5.325 0h3.35V5h-3.35zm5.35 0H19V5h-3.325z");
}
</style><path class="tft1gibsc"/>`,
		"fallback": "material-symbols:grid-on-outline-sharp",
	});
}

export default Component;
