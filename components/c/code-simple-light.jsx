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
		"content": `<style>.zoe6sqesh {
  fill: currentColor;
  d: path("M92 68.49L25 128l67 59.52a6 6 0 1 1-8 9l-72-64a6 6 0 0 1 0-9l72-64a6 6 0 0 1 8 9Zm152 55l-72-64a6 6 0 0 0-8 9L231 128l-67 59.52a6 6 0 1 0 8 9l72-64a6 6 0 0 0 0-9Z");
}
</style><path class="zoe6sqesh"/>`,
		"fallback": "ph:code-simple-light",
	});
}

export default Component;
