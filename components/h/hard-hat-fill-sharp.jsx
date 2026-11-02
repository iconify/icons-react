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
		"content": `<style>.hykqulb8x {
  fill: currentColor;
  d: path("M20 11v4H4v-4a6.01 6.01 0 0 1 5-5.918V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.082A6.01 6.01 0 0 1 20 11M2 17h20v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}
</style><path class="hykqulb8x"/>`,
		"fallback": "coolicons:hard-hat-fill-sharp",
	});
}

export default Component;
