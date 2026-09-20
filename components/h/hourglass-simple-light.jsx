import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l-o55zbhw {
  fill: currentColor;
  d: path("m209.8 198l-73.12-70l73.12-70l.09-.09A14 14 0 0 0 200 34H56a14 14 0 0 0-9.9 23.9l.09.09l73.12 70L46.2 198l-.09.09A14 14 0 0 0 56 222h144a14 14 0 0 0 9.9-23.9ZM54.16 47.23A1.91 1.91 0 0 1 56 46h144a2 2 0 0 1 1.45 3.38L128 119.69L54.56 49.38a1.91 1.91 0 0 1-.4-2.15m147.68 161.54A1.91 1.91 0 0 1 200 210H56a2 2 0 0 1-1.45-3.38L128 136.31l73.44 70.31a1.91 1.91 0 0 1 .4 2.15");
}
</style><path class="l-o55zbhw"/>`,
		"fallback": "ph:hourglass-simple-light",
	});
}

export default Component;
