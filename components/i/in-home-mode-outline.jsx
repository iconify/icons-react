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
		"content": `<style>.k6dhdbclo {
  fill: currentColor;
  d: path("M4 20v-9.375L2.2 12l-1.175-1.575L12 2l11 8.4l-1.2 1.6L12 4.5L6 9.1V18h3v2zm10.925 2L10.7 17.75l1.4-1.425l2.825 2.825L20.6 13.5l1.4 1.425z");
}
</style><path class="k6dhdbclo"/>`,
		"fallback": "material-symbols:in-home-mode-outline",
	});
}

export default Component;
