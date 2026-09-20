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
		"content": `<style>.vzffklbwm {
  fill: currentColor;
  d: path("M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z");
}
</style><path class="vzffklbwm"/>`,
		"fallback": "material-symbols:add-sharp",
	});
}

export default Component;
