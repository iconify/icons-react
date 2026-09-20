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
		"content": `<style>.tn5cbfbty {
  fill: currentColor;
  d: path("M9.704 8.706A1 1 0 1 0 8.29 7.292l-4.997 5.004a1 1 0 0 0 0 1.413l4.997 4.998a1 1 0 1 0 1.415-1.414L6.41 14H13a8 8 0 0 0 7.996-7.75L21 6a1 1 0 1 0-2 0a6 6 0 0 1-5.775 5.996L13 12H6.414z");
}
</style><path class="tn5cbfbty"/>`,
		"fallback": "fluent:arrow-reply-down-24-filled",
	});
}

export default Component;
