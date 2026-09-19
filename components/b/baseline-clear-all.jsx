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
		"content": `<style>.c--36ycir {
  fill: currentColor;
  d: path("M5 13h14v-2H5zm-2 4h14v-2H3zM7 7v2h14V7z");
}
</style><path class="c--36ycir"/>`,
		"fallback": "ic:baseline-clear-all",
	});
}

export default Component;
