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
		"content": `<style>.jrwm7dkhc {
  fill: currentColor;
  d: path("M3 16a1 1 0 0 1 1-1h21.586l-8.293-8.293a1 1 0 0 1 1.414-1.414l10 10a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414-1.414L25.586 17H4a1 1 0 0 1-1-1");
}
</style><path class="jrwm7dkhc"/>`,
		"fallback": "fluent:arrow-right-32-regular",
	});
}

export default Component;
