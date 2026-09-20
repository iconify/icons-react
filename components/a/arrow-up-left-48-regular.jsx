import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i94ax_j7j {
  fill: currentColor;
  d: path("M25.75 6a1.25 1.25 0 1 1 0 2.5H10.268l31.366 31.366a1.25 1.25 0 0 1-1.768 1.768L8.5 10.268V25.75a1.25 1.25 0 1 1-2.5 0V7.25C6 6.56 6.56 6 7.25 6z");
}
</style><path class="i94ax_j7j"/>`,
		"fallback": "fluent:arrow-up-left-48-regular",
	});
}

export default Component;
