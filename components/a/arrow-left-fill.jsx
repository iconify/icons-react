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
		"content": `<style>.hgme0g3dg {
  fill: currentColor;
  d: path("M7.414 11H19a1 1 0 0 1 0 2H7.414l3.293 3.293a.999.999 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414Z");
}
</style><path class="hgme0g3dg"/>`,
		"fallback": "coolicons:arrow-left-fill",
	});
}

export default Component;
