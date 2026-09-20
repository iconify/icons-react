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
		"content": `<style>.c982v1boz {
  fill: currentColor;
  d: path("M17 15.35V20H7v-4.65q-2.275-.8-3.637-2.187T2 10.075q0-2.525 2.913-4.3T12 4t7.088 1.775t2.912 4.3q0 1.7-1.362 3.088T17 15.35m-6.225-2.85H14v-.9h-2.225V7.5h-1z");
}
</style><path class="c982v1boz"/>`,
		"fallback": "material-symbols:game-stick-left-sharp",
	});
}

export default Component;
