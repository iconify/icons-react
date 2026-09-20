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
		"content": `<style>.sxi-_cbaw {
  fill: currentColor;
  d: path("M2 13v-2h20v2zm5-3V7h10v3zm0 7v-3h10v3z");
}
</style><path class="sxi-_cbaw"/>`,
		"fallback": "material-symbols:align-center",
	});
}

export default Component;
