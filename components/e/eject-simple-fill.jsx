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
		"content": `<style>.y5d9icc5z {
  fill: currentColor;
  d: path("M232 200a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8M40.09 160h175.82a16.1 16.1 0 0 0 12.48-26.23L146.74 32.94a24.11 24.11 0 0 0-37.48 0L27.61 133.77A16.1 16.1 0 0 0 40.09 160");
}
</style><path class="y5d9icc5z"/>`,
		"fallback": "ph:eject-simple-fill",
	});
}

export default Component;
