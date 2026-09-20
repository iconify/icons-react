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
		"content": `<style>.ier2kxonf {
  fill: currentColor;
  d: path("M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M72 168a8 8 0 0 1-5.66-2.34l-24-24a8 8 0 0 1 11.32-11.32L72 148.69l58.34-58.35a8 8 0 0 1 11.32 11.32l-64 64A8 8 0 0 1 72 168m141.66-66.34l-64 64a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L144 148.69l58.34-58.35a8 8 0 0 1 11.32 11.32");
}
</style><path class="ier2kxonf"/>`,
		"fallback": "ph:checks-fill",
	});
}

export default Component;
