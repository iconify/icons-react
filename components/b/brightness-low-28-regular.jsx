import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tpkr-20yd {
  fill: currentColor;
  d: path("M14 4a.75.75 0 0 1 .75.75v1.496a.75.75 0 0 1-1.5 0V4.75A.75.75 0 0 1 14 4m0 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-1.5a4.5 4.5 0 1 1-.001-9a4.5 4.5 0 0 1 0 9m9.25-3.75a.75.75 0 0 0 0-1.5h-1.497a.75.75 0 0 0 0 1.5zM14 21.004a.75.75 0 0 1 .75.75v1.496a.75.75 0 0 1-1.5 0v-1.496a.75.75 0 0 1 .75-.75M6.25 14.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5zm.469-8.03a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06m1.06 14.56a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 1.06zm13.5-14.56a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06m-1.06 14.56a.75.75 0 1 0 1.06-1.06l-.988-.989a.75.75 0 1 0-1.06 1.06z");
}
</style><path class="tpkr-20yd"/>`,
		"fallback": "fluent:brightness-low-28-regular",
	});
}

export default Component;
