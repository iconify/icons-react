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
		"content": `<style>.nygylfb8t {
  fill: currentColor;
  d: path("M16 13h-3V3h-2v10H8l4 4zM4 19v2h16v-2z");
}
</style><path class="nygylfb8t"/>`,
		"fallback": "ic:baseline-vertical-align-bottom",
	});
}

export default Component;
