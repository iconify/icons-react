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
		"content": `<style>.gu_wdxieb {
  fill: currentColor;
  d: path("M7 17V7h9v2H9v6h5v-2h-2v-2h4v6z");
}
</style><path class="gu_wdxieb"/>`,
		"fallback": "material-symbols:g-mobiledata-sharp",
	});
}

export default Component;
