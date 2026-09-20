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
		"content": `<style>.w3gu7i0al {
  fill: currentColor;
  d: path("M10.071 13.462L12 12.298l1.929 1.164l-.523-2.196l1.711-1.475l-2.24-.187L12 7.539l-.877 2.065l-2.24.187l1.711 1.475zM6 19.5V4h12v15.5l-6-2.577z");
}
</style><path class="w3gu7i0al"/>`,
		"fallback": "material-symbols-light:bookmark-star-sharp",
	});
}

export default Component;
