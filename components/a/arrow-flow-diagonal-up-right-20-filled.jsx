import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sgk9lzb8s {
  fill: currentColor;
  d: path("M10.5 4a.5.5 0 0 0 0 1h3.793l-6.555 6.555a3 3 0 1 0 .707.707L15 5.708V9.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5z");
}
</style><path class="sgk9lzb8s"/>`,
		"fallback": "fluent:arrow-flow-diagonal-up-right-20-filled",
	});
}

export default Component;
