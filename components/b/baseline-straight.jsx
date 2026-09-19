import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nphati1pw {
  fill: currentColor;
  d: path("M11 6.83L9.41 8.41L8 7l4-4l4 4l-1.41 1.41L13 6.83V21h-2z");
}
</style><path class="nphati1pw"/>`,
		"fallback": "ic:baseline-straight",
	});
}

export default Component;
