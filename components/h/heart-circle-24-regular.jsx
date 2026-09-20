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
		"content": `<style>.muvo-pbwr {
  fill: currentColor;
  d: path("M11.696 16.856L7.59 12.064a2.46 2.46 0 0 1 3.583-3.367L12 9.5l.827-.803a2.461 2.461 0 0 1 3.583 3.368l-4.106 4.79a.4.4 0 0 1-.608 0M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-1.5 0a8.5 8.5 0 1 0-17 0a8.5 8.5 0 0 0 17 0");
}
</style><path class="muvo-pbwr"/>`,
		"fallback": "fluent:heart-circle-24-regular",
	});
}

export default Component;
