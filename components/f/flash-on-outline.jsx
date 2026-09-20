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
		"content": `<style>.qn0g88y2z {
  fill: currentColor;
  d: path("m12 15.6l4.008-5.811h-3.331L14.35 4H9.385v8H12zm-1 3.246V13H8.385V3h7.288L14 8.789h3.904zM12 12H9.385z");
}
</style><path class="qn0g88y2z"/>`,
		"fallback": "material-symbols-light:flash-on-outline",
	});
}

export default Component;
