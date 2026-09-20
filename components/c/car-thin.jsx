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
		"content": `<style>.wvvy49b7q {
  fill: currentColor;
  d: path("M240 108h-13.4l-28.83-64.87a12 12 0 0 0-11-7.13H69.2a12 12 0 0 0-11 7.13L29.4 108H16a4 4 0 0 0 0 8h12v84a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h104v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-84h12a4 4 0 0 0 0-8M65.54 46.38A4 4 0 0 1 69.2 44h117.6a4 4 0 0 1 3.66 2.38L217.84 108H38.16ZM68 200a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-20h32Zm148 4h-24a4 4 0 0 1-4-4v-20h32v20a4 4 0 0 1-4 4m4-32H36v-56h184ZM60 144a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m112 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4");
}
</style><path class="wvvy49b7q"/>`,
		"fallback": "ph:car-thin",
	});
}

export default Component;
