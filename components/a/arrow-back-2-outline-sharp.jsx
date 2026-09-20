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
		"content": `<style>.ole7zcctq {
  fill: currentColor;
  d: path("M15 17.192L6.846 12L15 6.808zm-1-1.842v-6.7L8.711 12z");
}
</style><path class="ole7zcctq"/>`,
		"fallback": "material-symbols-light:arrow-back-2-outline-sharp",
	});
}

export default Component;
