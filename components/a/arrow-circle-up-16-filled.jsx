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
		"content": `<style>.mdyxbswyp {
  fill: currentColor;
  d: path("M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m6.809-3.462a.5.5 0 0 0-.16.106l-.003.003l-2.5 2.5a.5.5 0 1 0 .708.707L7.5 6.207V11a.5.5 0 0 0 1 0V6.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5l-.003-.002a.5.5 0 0 0-.542-.106");
}
</style><path class="mdyxbswyp"/>`,
		"fallback": "fluent:arrow-circle-up-16-filled",
	});
}

export default Component;
