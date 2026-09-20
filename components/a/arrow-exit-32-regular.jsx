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
		"content": `<style>.hl70ddazn {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29H19a1 1 0 1 0 0-2H7.5A2.5 2.5 0 0 1 5 24.5v-17A2.5 2.5 0 0 1 7.5 5H19a1 1 0 1 0 0-2zm15.207 5.293a1 1 0 1 0-1.414 1.414L26.586 15H11a1 1 0 1 0 0 2h15.586l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z");
}
</style><path class="hl70ddazn"/>`,
		"fallback": "fluent:arrow-exit-32-regular",
	});
}

export default Component;
