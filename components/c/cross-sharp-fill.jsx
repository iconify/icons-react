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
		"content": `<style>.f5st_ke-v {
  fill: currentColor;
  d: path("M15.375 2C15.927 2 16.375 2.45 16.375 3V7.62H21C21.552 7.62 22 8.07 22 8.62V15.38C22 15.93 21.552 16.38 21 16.38H16.375V21C16.375 21.55 15.927 22 15.375 22H8.625C8.073 22 7.625 21.55 7.625 21V16.38H3C2.448 16.38 2 15.93 2 15.38V8.62C2 8.07 2.448 7.62 3 7.62H7.625V3C7.625 2.45 8.073 2 8.625 2H15.375Z");
}
</style><path class="f5st_ke-v"/>`,
		"fallback": "keyline-icons:cross-sharp-fill",
	});
}

export default Component;
