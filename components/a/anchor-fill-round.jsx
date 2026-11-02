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
		"content": `<style>.kxurvwbnr {
  fill: currentColor;
  d: path("M13 7.829V10h2a1 1 0 0 1 0 2h-2v7.939A8.015 8.015 0 0 0 19.939 13H19a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1c0 5.523-4.477 10-10 10S2 17.523 2 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-.939A8.015 8.015 0 0 0 11 19.939V12H9a1 1 0 0 1 0-2h2V7.829a3 3 0 1 1 2 0m-.293-2.122a.999.999 0 1 0-1.414-1.414a.999.999 0 1 0 1.414 1.414");
}
</style><path class="kxurvwbnr"/>`,
		"fallback": "coolicons:anchor-fill-round",
	});
}

export default Component;
