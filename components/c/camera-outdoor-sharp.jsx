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
		"content": `<style>.qzdnx98du {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.27l7 5.27V11h-8.461v8H19v1zm6.923-2.384v-5.231h5.23v2.077L19 13.489v3.022l-1.846-.972v2.077z");
}
</style><path class="qzdnx98du"/>`,
		"fallback": "material-symbols-light:camera-outdoor-sharp",
	});
}

export default Component;
