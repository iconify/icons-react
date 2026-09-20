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
		"content": `<style>.py-2kccmu {
  fill: currentColor;
  d: path("M18 9V6h-3V4h3V1h2v3h3v2h-3v3zM8 21v-2H2V3h11.35q-.175.475-.262.975T13 5q0 2.5 1.75 4.25T19 11q.825 0 1.588-.213T22 10.2V19h-6v2z");
}
</style><path class="py-2kccmu"/>`,
		"fallback": "material-symbols:display-add-sharp",
	});
}

export default Component;
