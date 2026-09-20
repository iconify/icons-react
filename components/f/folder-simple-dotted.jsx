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
		"content": `<style>.nehm_lb0m {
  fill: currentColor;
  d: path("M24 80V64a16 16 0 0 1 16-16h53.3a15.6 15.6 0 0 1 9.6 3.2l29.9 22.4A8 8 0 0 1 128 88a7.7 7.7 0 0 1-4.8-1.6L93.3 64H40v16a8 8 0 0 1-16 0Zm64 120H40v-8a8 8 0 0 0-16 0v8.6A15.4 15.4 0 0 0 39.4 216H88a8 8 0 0 0 0-16Zm72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Zm-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16ZM32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Z");
}
</style><path class="nehm_lb0m"/>`,
		"fallback": "ph:folder-simple-dotted",
	});
}

export default Component;
