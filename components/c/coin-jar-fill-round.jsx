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
		"content": `<style>.rm_0_owih {
  fill: currentColor;
  d: path("M5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m7 2a3 3 0 1 1 6 0a3 3 0 0 1-6 0m5 6v.586l.707.707C18.665 15.252 19 16.683 19 18v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1c0-1.317.335-2.748 1.293-3.707L7 13.586V13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2");
}
</style><path class="rm_0_owih"/>`,
		"fallback": "coolicons:coin-jar-fill-round",
	});
}

export default Component;
