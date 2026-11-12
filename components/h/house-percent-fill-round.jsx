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
		"content": `<style>.xxuaajuoo {
  fill: currentColor;
  d: path("M3 17v-4c0-1.317.335-2.748 1.293-3.707l4-4a5.243 5.243 0 0 1 7.414 0l4 4C20.665 10.252 21 11.683 21 13v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5m11.707-3.293a.999.999 0 1 0-1.414-1.414l-4 4a.999.999 0 1 0 1.414 1.414ZM10 12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4.01 4H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="xxuaajuoo"/>`,
		"fallback": "coolicons:house-percent-fill-round",
	});
}

export default Component;
