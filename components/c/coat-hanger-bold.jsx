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
		"content": `<style>.nzqbo3byn {
  fill: currentColor;
  d: path("m244 168l-96-72l19.2-14.4A12 12 0 0 0 172 72a44 44 0 0 0-87.66-5.48a12 12 0 1 0 23.82 3a20 20 0 0 1 39.09-2.92L121 86.24c-.15.1-.29.21-.43.32L12 168a20 20 0 0 0 12 36h208a20 20 0 0 0 12-36M36 180l92-69l92 69Z");
}
</style><path class="nzqbo3byn"/>`,
		"fallback": "ph:coat-hanger-bold",
	});
}

export default Component;
