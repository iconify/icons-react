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
		"content": `<style>.lbtakkbof {
  fill: currentColor;
  d: path("M3 4V3h18v1zm4.5 5.5v-2h9v2zm0 6v-2h9v2z");
}
</style><path class="lbtakkbof"/>`,
		"fallback": "material-symbols-light:align-start-outline",
	});
}

export default Component;
