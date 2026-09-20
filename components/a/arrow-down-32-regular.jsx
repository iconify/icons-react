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
		"content": `<style>.lkvbfykiq {
  fill: currentColor;
  d: path("M16 3a1 1 0 0 1 1 1v21.586l8.293-8.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-10-10a1 1 0 1 1 1.414-1.414L15 25.586V4a1 1 0 0 1 1-1");
}
</style><path class="lkvbfykiq"/>`,
		"fallback": "fluent:arrow-down-32-regular",
	});
}

export default Component;
