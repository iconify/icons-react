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
		"content": `<style>.lr08hd01l {
  fill: currentColor;
  d: path("M3 22a1 1 0 0 1 0-2v-8.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V20a1 1 0 0 1 0 2Zm11-5a2 2 0 1 0-4 0v3h4Z");
}
</style><path class="lr08hd01l"/>`,
		"fallback": "coolicons:house-alt-2-fill-round",
	});
}

export default Component;
