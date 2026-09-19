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
		"content": `<style>.z9ihp5bhr {
  fill: currentColor;
  d: path("M22 11V9L12 2L2 9v2h2v9H2v2h20v-2h-2v-9zm-6 7h-2v-4l-2 3l-2-3v4H8v-7h2l2 3l2-3h2z");
}
</style><path class="z9ihp5bhr"/>`,
		"fallback": "ic:baseline-museum",
	});
}

export default Component;
