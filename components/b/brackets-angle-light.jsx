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
		"content": `<style>.skpvrup_r {
  fill: currentColor;
  d: path("M85.06 43.22L31.11 128l54 84.78a6 6 0 0 1-1.84 8.28a6 6 0 0 1-8.28-1.84l-56-88a6 6 0 0 1 0-6.44l56-88a6 6 0 0 1 10.12 6.44Zm152 81.56l-56-88a6 6 0 1 0-10.12 6.44L224.89 128l-53.95 84.78a6 6 0 0 0 1.84 8.28a6 6 0 0 0 8.28-1.84l56-88a6 6 0 0 0 0-6.44");
}
</style><path class="skpvrup_r"/>`,
		"fallback": "ph:brackets-angle-light",
	});
}

export default Component;
