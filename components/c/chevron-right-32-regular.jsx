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
		"content": `<style>.oxu3sdsur {
  fill: currentColor;
  d: path("M11.293 26.707a1 1 0 0 1 0-1.414L20.586 16l-9.293-9.293a1 1 0 0 1 1.414-1.414l10 10a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0");
}
</style><path class="oxu3sdsur"/>`,
		"fallback": "fluent:chevron-right-32-regular",
	});
}

export default Component;
