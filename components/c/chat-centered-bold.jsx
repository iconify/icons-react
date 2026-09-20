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
		"content": `<style>.gkapk37fa {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h58.11l12.52 21.92a20 20 0 0 0 34.74 0L157.89 204H216a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 144h-61.07a12 12 0 0 0-10.42 6.05L128 207.94l-12.51-21.89a12 12 0 0 0-10.42-6.05H44V60h168Z");
}
</style><path class="gkapk37fa"/>`,
		"fallback": "ph:chat-centered-bold",
	});
}

export default Component;
