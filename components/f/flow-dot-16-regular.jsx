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
		"content": `<style>.yur2i38-b {
  fill: currentColor;
  d: path("M3.5 2a1.5 1.5 0 0 1 1.413 1H11.5a2.5 2.5 0 0 1 0 5h-7a1.5 1.5 0 1 0 0 3h6.587a1.5 1.5 0 1 1 0 1H4.5a2.5 2.5 0 0 1 0-5h7a1.5 1.5 0 0 0 0-3H4.913A1.5 1.5 0 1 1 3.5 2");
}
</style><path class="yur2i38-b"/>`,
		"fallback": "fluent:flow-dot-16-regular",
	});
}

export default Component;
