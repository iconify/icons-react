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
		"content": `<style>.k2939dwgx {
  fill: currentColor;
  d: path("M1.146 1.147a.5.5 0 0 1 .707 0l13 13a.5.5 0 0 1-.707.707L8.073 8.779l-1.787 4.025a.75.75 0 0 1-1.371-.61l2.022-4.551L4.61 5.317a.75.75 0 0 1-.05.931L3.004 8L4.56 9.751a.75.75 0 0 1-1.122.997l-2-2.25a.75.75 0 0 1 0-.997l2-2.25a.75.75 0 0 1 .985-.12L1.146 1.854a.5.5 0 0 1 0-.707m10.356 4.042a.75.75 0 0 1 1.058.062l2 2.25a.75.75 0 0 1 0 .997l-1.854 2.086l-1.063-1.063l1.353-1.522l-1.557-1.75a.75.75 0 0 1 .063-1.06M8.914 3.194a.75.75 0 0 1 1.371.61L8.943 6.82L7.807 5.685z");
}
</style><path class="k2939dwgx"/>`,
		"fallback": "fluent:code-off-16-filled",
	});
}

export default Component;
