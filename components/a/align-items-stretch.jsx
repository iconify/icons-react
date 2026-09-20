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
		"content": `<style>.bo4pait0c {
  fill: currentColor;
  d: path("M7.5 17.5v-11h2v11zm7 0v-11h2v11zM3 4V3h18v1zm0 17v-1h18v1z");
}
</style><path class="bo4pait0c"/>`,
		"fallback": "material-symbols-light:align-items-stretch",
	});
}

export default Component;
