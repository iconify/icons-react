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
		"content": `<style>.hjzndgbmd {
  fill: currentColor;
  d: path("M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm-8 4V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="hjzndgbmd"/>`,
		"fallback": "material-symbols:add-box-outline-sharp",
	});
}

export default Component;
