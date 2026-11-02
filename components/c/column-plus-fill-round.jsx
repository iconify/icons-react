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
		"content": `<style>.o-satkdyc {
  fill: currentColor;
  d: path("M3 7a4 4 0 0 1 8 0v10a4 4 0 0 1-8 0Zm15 4h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0Z");
}
</style><path class="o-satkdyc"/>`,
		"fallback": "coolicons:column-plus-fill-round",
	});
}

export default Component;
