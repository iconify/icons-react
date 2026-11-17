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
		"content": `<style>.cy45kfbra {
  fill: currentColor;
  d: path("M19 2a1 1 0 0 1 .994 1.11l-2 18A1 1 0 0 1 17 22H7a1 1 0 0 1-.994-.89l-2-18A1 1 0 0 1 5 2ZM6.895 11h10.21l.778-7H6.117Z");
}
</style><path class="cy45kfbra"/>`,
		"fallback": "coolicons:glass-water-fill-sharp",
	});
}

export default Component;
