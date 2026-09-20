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
		"content": `<style>.o5j3c_ees {
  fill: currentColor;
  d: path("M11 17V7h10v10zm-8 4v-2h18v2zm0-4v-2h6v2zm0-4v-2h6v2zm0-4V7h6v2zm0-4V3h18v2z");
}
</style><path class="o5j3c_ees"/>`,
		"fallback": "material-symbols:format-image-right",
	});
}

export default Component;
