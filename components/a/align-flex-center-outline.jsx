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
		"content": `<style>.dyb_byx3u {
  fill: currentColor;
  d: path("M11 22v-8.5H3v-3h8V2h2v8.5h8v3h-8V22z");
}
</style><path class="dyb_byx3u"/>`,
		"fallback": "material-symbols:align-flex-center-outline",
	});
}

export default Component;
