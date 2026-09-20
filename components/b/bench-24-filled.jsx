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
		"content": `<style>.kzvgegbwd {
  fill: currentColor;
  d: path("M5.75 4A2.75 2.75 0 0 0 3 6.75V12h18V6.75A2.75 2.75 0 0 0 18.25 4zM3 13a2 2 0 1 0 0 4v2.25a.75.75 0 0 0 1.5 0V17h15v2.25a.75.75 0 0 0 1.5 0V17a2 2 0 1 0 0-4z");
}
</style><path class="kzvgegbwd"/>`,
		"fallback": "fluent:bench-24-filled",
	});
}

export default Component;
