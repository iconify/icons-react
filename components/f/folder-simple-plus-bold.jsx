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
		"content": `<style>.me6lnbh6q {
  fill: currentColor;
  d: path("M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176.89A19.13 19.13 0 0 0 236 200.89V88a20 20 0 0 0-20-20m-4 128H44V68h48l28.8 21.6A12 12 0 0 0 128 92h84Zm-84-88a12 12 0 0 1 12 12v12h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 12-12");
}
</style><path class="me6lnbh6q"/>`,
		"fallback": "ph:folder-simple-plus-bold",
	});
}

export default Component;
