import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.emu50fujd {
  fill: currentColor;
  d: path("M6.5 1a.5.5 0 0 0 0 1h2.793L4.879 6.414a2.5 2.5 0 1 0 .707.707L10 2.707V5.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5zM2 8.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0");
}
</style><path class="emu50fujd"/>`,
		"fallback": "fluent:arrow-flow-diagonal-up-right-12-regular",
	});
}

export default Component;
