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
		"content": `<style>.ayh04l5-a {
  fill: currentColor;
  d: path("M12 3L2 12h3v8h14v-8h3zm0 13c-1.1 0-2-.9-2-2s2-4 2-4s2 2.9 2 4s-.9 2-2 2");
}
</style><path class="ayh04l5-a"/>`,
		"fallback": "ic:baseline-water-damage",
	});
}

export default Component;
