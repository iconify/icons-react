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
		"content": `<style>.ijdxe0fug {
  fill: currentColor;
  d: path("M2 15.5v2h20v-2zm0-5v2h20v-2zm0-5v2h20v-2z");
}
</style><path class="ijdxe0fug"/>`,
		"fallback": "ic:dehaze",
	});
}

export default Component;
