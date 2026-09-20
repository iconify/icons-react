import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jaxzql63r {
  fill: currentColor;
  d: path("M20.707 5.293a1 1 0 0 1 0 1.414L11.414 16l9.293 9.293a1 1 0 0 1-1.414 1.414l-10-10a1 1 0 0 1 0-1.414l10-10a1 1 0 0 1 1.414 0");
}
</style><path class="jaxzql63r"/>`,
		"fallback": "fluent:chevron-left-32-regular",
	});
}

export default Component;
