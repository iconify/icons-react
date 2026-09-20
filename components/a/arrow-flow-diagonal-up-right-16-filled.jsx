import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tsofxdb6r {
  fill: currentColor;
  d: path("M8.5 3a.5.5 0 0 0 0 1h2.793L5.879 9.414a2.5 2.5 0 1 0 .707.707L12 4.707V7.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5z");
}
</style><path class="tsofxdb6r"/>`,
		"fallback": "fluent:arrow-flow-diagonal-up-right-16-filled",
	});
}

export default Component;
