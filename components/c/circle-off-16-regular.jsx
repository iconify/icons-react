import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o7upa1xuv {
  fill: currentColor;
  d: path("M1.146 1.146a.5.5 0 0 1 .708 0l13 13a.5.5 0 1 1-.707.707l-1.565-1.564A7 7 0 0 1 2.71 3.417L1.146 1.854a.5.5 0 0 1 0-.708m2.273 2.98a6 6 0 0 0 8.454 8.454zM8 1a7 7 0 0 1 5.895 10.773l-.727-.726A6 6 0 0 0 4.952 2.83l-.726-.727A6.97 6.97 0 0 1 8 1");
}
</style><path class="o7upa1xuv"/>`,
		"fallback": "fluent:circle-off-16-regular",
	});
}

export default Component;
