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
		"content": `<style>.dvypstb9u {
  fill: currentColor;
  d: path("M5.873 1a1 1 0 0 0-.959.714L3.031 8.036A.75.75 0 0 0 3.75 9h1.583l-1.28 4.389c-.384 1.316 1.324 2.2 2.178 1.128l6.607-8.3A.75.75 0 0 0 12.25 5h-2.03l.994-2.649A1 1 0 0 0 10.279 1z");
}
</style><path class="dvypstb9u"/>`,
		"fallback": "fluent:flash-16-filled",
	});
}

export default Component;
