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
		"content": `<style>.xs9jllbyn {
  fill: currentColor;
  d: path("M5.293 11.293a1 1 0 0 1 1.414 0L16 20.586l9.293-9.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-10-10a1 1 0 0 1 0-1.414");
}
</style><path class="xs9jllbyn"/>`,
		"fallback": "fluent:chevron-down-32-regular",
	});
}

export default Component;
