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
		"content": `<style>.nyh_zvvft {
  fill: currentColor;
  d: path("M3.689 21L3 20.312L10.312 13H5v-1h7v7h-1v-5.312zM12 12V5h1v5.312L20.312 3l.688.688L13.688 11H19v1z");
}
</style><path class="nyh_zvvft"/>`,
		"fallback": "material-symbols-light:close-fullscreen-outline",
	});
}

export default Component;
