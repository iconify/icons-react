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
		"content": `<style>.n7t9upbbe {
  fill: currentColor;
  d: path("M237.6 143.78L169.13 31.52A15.91 15.91 0 0 0 155.56 24h-55.13a15.89 15.89 0 0 0-13.56 7.52l-.05.07L18.44 143.7a16 16 0 0 0-.33 16.42l27.32 47.82A16 16 0 0 0 59.32 216h137.35a16 16 0 0 0 13.89-8.06l27.32-47.82a15.91 15.91 0 0 0-.28-16.34M219 144h-46.48l-35.19-58.67l22.75-37.92ZM92.53 160h70.94l24 40H68.53Zm9.6-16L128 100.88L153.87 144Zm-6.22-96.59l22.76 37.92L83.47 144H37Z");
}
</style><path class="n7t9upbbe"/>`,
		"fallback": "ph:google-drive-logo-fill",
	});
}

export default Component;
