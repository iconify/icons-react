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
		"content": `<style>.t7rpg_3yx {
  fill: currentColor;
  d: path("m3 8.41l9 9l7-7V15h2V7h-8v2h4.59L12 14.59L4.41 7z");
}
</style><path class="t7rpg_3yx"/>`,
		"fallback": "ic:call-missed-outgoing",
	});
}

export default Component;
