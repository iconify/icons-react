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
		"content": `<style>.q3ont359y {
  fill: currentColor;
  d: path("m10.95 13.289l4.239-4.239l-.714-.708l-3.525 3.544l-1.425-1.424l-.713.713zM6 19.5V4h12v15.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5H7zM7 5h10z");
}
</style><path class="q3ont359y"/>`,
		"fallback": "material-symbols-light:bookmark-check-outline-sharp",
	});
}

export default Component;
