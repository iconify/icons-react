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
		"content": `<style>.mgum2qs6u {
  fill: currentColor;
  d: path("M240 112h-28.69L168 68.69A15.86 15.86 0 0 0 156.69 64H44.28A16 16 0 0 0 31 71.12L1.34 115.56A8.07 8.07 0 0 0 0 120v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h66a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16M44.28 80h112.41l32 32H23ZM64 192a16 16 0 1 1 16-16a16 16 0 0 1-16 16m128 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48-24h-17a32 32 0 0 0-62 0H95a32 32 0 0 0-62 0H16v-40h224Z");
}
</style><path class="mgum2qs6u"/>`,
		"fallback": "ph:car-profile",
	});
}

export default Component;
