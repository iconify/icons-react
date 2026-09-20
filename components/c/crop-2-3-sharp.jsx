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
		"content": `<style>.zm19ufxjq {
  fill: currentColor;
  d: path("M7 21V3h10v18z");
}
</style><path class="zm19ufxjq"/>`,
		"fallback": "material-symbols-light:crop-2-3-sharp",
	});
}

export default Component;
