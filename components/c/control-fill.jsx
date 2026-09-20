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
		"content": `<style>.cc1vfbn8p {
  fill: currentColor;
  d: path("M207.39 123.06A8 8 0 0 1 200 128H56a8 8 0 0 1-5.66-13.66l72-72a8 8 0 0 1 11.32 0l72 72a8 8 0 0 1 1.73 8.72");
}
</style><path class="cc1vfbn8p"/>`,
		"fallback": "ph:control-fill",
	});
}

export default Component;
