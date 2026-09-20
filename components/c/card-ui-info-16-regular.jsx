import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y3g1gjilt {
  fill: currentColor;
  d: path("M10.5 6a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 1a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m0 3a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5m-2-9A2.5 2.5 0 0 1 11 3.5v1.523a5.6 5.6 0 0 0-1 0V3.5A1.5 1.5 0 0 0 8.5 2h-5A1.5 1.5 0 0 0 2 3.5v5A1.5 1.5 0 0 0 3.5 10h1.523a5.6 5.6 0 0 0 0 1H3.5A2.5 2.5 0 0 1 1 8.5v-5A2.5 2.5 0 0 1 3.5 1zm1.999 7a.62.62 0 1 1 0 1.24a.62.62 0 0 1 0-1.24M5.5 6a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm3-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z");
}
</style><path class="y3g1gjilt"/>`,
		"fallback": "fluent:card-ui-info-16-regular",
	});
}

export default Component;
