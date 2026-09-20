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
		"content": `<style>.nkgz8exvd {
  fill: currentColor;
  d: path("M236 184a12 12 0 0 1-24 0a84 84 0 0 0-143.4-59.4L53.11 140H88a12 12 0 0 1 0 24H24a12 12 0 0 1-12-12V88a12 12 0 0 1 24 0v35.16l15.66-15.55A108 108 0 0 1 236 184");
}
</style><path class="nkgz8exvd"/>`,
		"fallback": "ph:arrow-arc-left-bold",
	});
}

export default Component;
