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
		"content": `<style>.ly7ng5qsf {
  fill: currentColor;
  d: path("M7.434 13.434q.182-.182.182-.434t-.182-.434T7 12.385t-.434.181t-.181.434t.181.434t.434.182t.434-.182m0-4q.182-.182.182-.434t-.182-.434T7 8.385t-.434.181T6.385 9t.181.434t.434.182t.434-.182M9.116 13.5H17.5v-1H9.116zm0-4H17.5v-1H9.116zM9 20v-2H3V4h18v14h-6v2z");
}
</style><path class="ly7ng5qsf"/>`,
		"fallback": "material-symbols-light:dvr-sharp",
	});
}

export default Component;
