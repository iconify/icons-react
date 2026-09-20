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
		"content": `<style>.e0pdq8b5p {
  fill: currentColor;
  d: path("M232 218h-26V40a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v178H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M194 40v178h-20V38h18a2 2 0 0 1 2 2M62 40a2 2 0 0 1 2-2h98v180H62Zm80 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10");
}
</style><path class="e0pdq8b5p"/>`,
		"fallback": "ph:door-open-light",
	});
}

export default Component;
