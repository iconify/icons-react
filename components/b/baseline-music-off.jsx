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
		"content": `<style>.xjqjf_buk {
  fill: currentColor;
  d: path("M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4v-1.73L19.73 21L21 19.73zM14 7h4V3h-6v5.18l2 2z");
}
</style><path class="xjqjf_buk"/>`,
		"fallback": "ic:baseline-music-off",
	});
}

export default Component;
