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
		"content": `<style>.xyndqg73e {
  fill: currentColor;
  d: path("M11 17V7h10v10zm2-2h6V9h-6zM3 21v-2h18v2zm0-4v-2h6v2zm0-4v-2h6v2zm0-4V7h6v2zm0-4V3h18v2zm13 7");
}
</style><path class="xyndqg73e"/>`,
		"fallback": "material-symbols:format-image-right-outline",
	});
}

export default Component;
