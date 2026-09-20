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
		"content": `<style>.eqy95ab8n {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m46.21-143.58l-64 32a4.08 4.08 0 0 0-1.79 1.79l-32 64A4 4 0 0 0 80 180a4.05 4.05 0 0 0 1.79-.42l64-32a4.08 4.08 0 0 0 1.79-1.79l32-64a4 4 0 0 0-5.37-5.37M141 141l-52.08 26L115 115l52.08-26Z");
}
</style><path class="eqy95ab8n"/>`,
		"fallback": "ph:compass-thin",
	});
}

export default Component;
