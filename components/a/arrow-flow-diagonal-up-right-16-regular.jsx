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
		"content": `<style>.io0ekxt-e {
  fill: currentColor;
  d: path("M8.5 3a.5.5 0 0 0 0 1h2.793L5.879 9.414a2.5 2.5 0 1 0 .707.707L12 4.707V7.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5zM3 11.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0");
}
</style><path class="io0ekxt-e"/>`,
		"fallback": "fluent:arrow-flow-diagonal-up-right-16-regular",
	});
}

export default Component;
