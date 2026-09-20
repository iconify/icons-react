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
		"content": `<style>.rikfcf0pw {
  fill: currentColor;
  d: path("M5 20h14v-6H5zm16 2H3V4h4v2H5v6h14V6h-2V4h4zm-9-8v-2zm-1-6V6H9V4h2V2h2v2h2v2h-2v2z");
}
</style><path class="rikfcf0pw"/>`,
		"fallback": "material-symbols:add-row-above-outline",
	});
}

export default Component;
