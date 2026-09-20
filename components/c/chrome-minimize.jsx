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
		"content": `<style>.kayxdc_nz {
  fill: currentColor;
  d: path("M4 20v-2h16v2H4Z");
}
</style><path class="kayxdc_nz"/>`,
		"fallback": "material-symbols:chrome-minimize",
	});
}

export default Component;
