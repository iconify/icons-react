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
		"content": `<style>.t0pgdl8kx {
  fill: currentColor;
  d: path("M244 116h-57.21a60 60 0 0 0-117.58 0H12a12 12 0 0 0 0 24h57.21a60 60 0 0 0 117.58 0H244a12 12 0 0 0 0-24m-116 48a36 36 0 1 1 36-36a36 36 0 0 1-36 36");
}
</style><path class="t0pgdl8kx"/>`,
		"fallback": "ph:git-commit-bold",
	});
}

export default Component;
