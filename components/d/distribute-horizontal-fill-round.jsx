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
		"content": `<style>.ndcj8zbpr {
  fill: currentColor;
  d: path("M5 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm16 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM8 9a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0Z");
}
</style><path class="ndcj8zbpr"/>`,
		"fallback": "coolicons:distribute-horizontal-fill-round",
	});
}

export default Component;
