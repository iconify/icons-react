import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cco0px37v {
  fill: currentColor;
  d: path("M9.03 6.47a.75.75 0 0 1 0 1.06L5.56 11h12.88l-3.47-3.47a.75.75 0 0 1 1.06-1.06l4.75 4.75a.75.75 0 0 1 0 1.06l-4.75 4.75a.75.75 0 1 1-1.06-1.06l3.47-3.47H5.56l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4.75-4.75a.75.75 0 0 1 0-1.06l4.75-4.75a.75.75 0 0 1 1.06 0");
}
</style><path class="cco0px37v"/>`,
		"fallback": "fluent:arrow-bidirectional-left-right-24-regular",
	});
}

export default Component;
