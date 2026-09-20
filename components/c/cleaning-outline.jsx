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
		"content": `<style>.e0roorb1u {
  fill: currentColor;
  d: path("m9 7l1-2V4H9V2h6q.425 0 .713.288T16 3v1l-1 2h-3V5l-2 2zM8 22v-6.85q0-.275.088-.587T8.3 14L12 7h3q.35.35.675.938T16 9v13zm2-2h4V9h-.8L10 15.1zm0 0h4z");
}
</style><path class="e0roorb1u"/>`,
		"fallback": "material-symbols:cleaning-outline",
	});
}

export default Component;
