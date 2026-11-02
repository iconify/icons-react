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
		"content": `<style>.hdpr_pbpa {
  fill: currentColor;
  d: path("M4 8h2v9H4v2a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Zm4 9V8h11a3 3 0 0 1 3 3v8a1 1 0 0 1-2 0v-2Z");
}
</style><path class="hdpr_pbpa"/>`,
		"fallback": "coolicons:bed-fill",
	});
}

export default Component;
