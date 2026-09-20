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
		"content": `<style>.ef83klnyh {
  fill: currentColor;
  d: path("M8 18H5.5q-1.458 0-2.479-1.021T2 14.5v-5q0-1.458 1.021-2.479T5.5 6h13q1.458 0 2.479 1.021T22 9.5v5q0 1.458-1.021 2.479T18.5 18H16q0 .31-.23.54t-.54.23H8.77q-.31 0-.54-.23T8 18");
}
</style><path class="ef83klnyh"/>`,
		"fallback": "material-symbols-light:home-max-rounded",
	});
}

export default Component;
