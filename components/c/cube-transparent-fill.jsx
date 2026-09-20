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
		"content": `<style>.k-9j58m8u {
  fill: currentColor;
  d: path("M104 152v-48h48v48ZM32 53v95a4 4 0 0 0 4 4h52V99.31L38.83 50.14A4 4 0 0 0 32 53m188 51h-52v52.69l49.17 49.17A4 4 0 0 0 224 203v-95a4 4 0 0 0-4-4m-68-68a4 4 0 0 0-4-4H53a4 4 0 0 0-2.83 6.83L99.31 88H152Zm60.49 45.17l-37.66-37.66a4 4 0 0 0-6.83 2.83V88h41.66a4 4 0 0 0 2.83-6.83M156.69 168H104v52a4 4 0 0 0 4 4h95a4 4 0 0 0 2.83-6.83Zm-113.18 6.83l37.66 37.66a4 4 0 0 0 6.83-2.83V168H46.34a4 4 0 0 0-2.83 6.83");
}
</style><path class="k-9j58m8u"/>`,
		"fallback": "ph:cube-transparent-fill",
	});
}

export default Component;
