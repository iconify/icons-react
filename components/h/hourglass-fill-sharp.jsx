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
		"content": `<style>.rfz5wbbfl {
  fill: currentColor;
  d: path("M5 2h14a1 1 0 0 1 0 2h-1v3c0 .265-.105.52-.293.707L13.414 12l4.293 4.293A1 1 0 0 1 18 17v3h1a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h1v-3c0-.265.105-.52.293-.707L10.586 12L6.293 7.707A1 1 0 0 1 6 7V4H5a1 1 0 0 1 0-2");
}
</style><path class="rfz5wbbfl"/>`,
		"fallback": "coolicons:hourglass-fill-sharp",
	});
}

export default Component;
