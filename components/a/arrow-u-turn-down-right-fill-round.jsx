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
		"content": `<style>.ntejkxhrw {
  fill: currentColor;
  d: path("m21.707 15.707l-4 4a.999.999 0 1 1-1.414-1.414L18.586 16H7a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5h6a1 1 0 0 1 0 2H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h11.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414");
}
</style><path class="ntejkxhrw"/>`,
		"fallback": "coolicons:arrow-u-turn-down-right-fill-round",
	});
}

export default Component;
