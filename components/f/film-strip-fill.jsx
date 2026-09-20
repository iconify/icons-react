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
		"content": `<style>.a6my9xbcj {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 16h32v16h-32ZM72 200H40v-16h32Zm0-128H40V56h32Zm48 128H88v-16h32Zm0-128H88V56h32Zm48 128h-32v-16h32Zm0-128h-32V56h32Zm48 128h-32v-16h32z");
}
</style><path class="a6my9xbcj"/>`,
		"fallback": "ph:film-strip-fill",
	});
}

export default Component;
