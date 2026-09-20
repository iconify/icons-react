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
		"content": `<style>.ax2hqfbxb {
  fill: currentColor;
  d: path("M2 4V2h20v2zm5 6V7h10v3zm0 6v-3h10v3z");
}
</style><path class="ax2hqfbxb"/>`,
		"fallback": "material-symbols:align-start-sharp",
	});
}

export default Component;
